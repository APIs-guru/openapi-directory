# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.MediaTabularExtractsheetRequest{
        QueryParams: operations.MediaTabularExtractsheetQueryParams{
            Arg1: "quae",
            Entryid: "rerum",
            Output: "vero",
        },
    }
    
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### service/media_tabular_extractsheet

* `MediaTabularExtractsheet` - API for Extract sheets

### type/2017_boulder_election_expenditures

* `Search2017BoulderElectionExpenditures` - Search API for '2017 Boulder Election Expenditures' entry type

### type/any

* `SearchAny` - Search API for 'Any file type' entry type

### type/beforeafter

* `SearchBeforeafter` - Search API for 'Before and After Images' entry type

### type/biblio

* `SearchBiblio` - Search API for 'Bibliographic Entry' entry type

### type/bio_dicom

* `SearchBioDicom` - Search API for 'DICOM File' entry type

### type/bio_dicom_test

* `SearchBioDicomTest` - Search API for 'DICOM Test File' entry type

### type/bio_fasta

* `SearchBioFasta` - Search API for 'FASTA File' entry type

### type/bio_fastq

* `SearchBioFastq` - Search API for 'FASTQ File' entry type

### type/bio_hmmer_index

* `SearchBioHmmerIndex` - Search API for 'HMMER Index File' entry type

### type/bio_ome_tiff

* `SearchBioOmeTiff` - Search API for 'OME TIFF File' entry type

### type/bio_ontology_assay

* `SearchBioOntologyAssay` - Search API for 'Assay' entry type

### type/bio_ontology_cohort

* `SearchBioOntologyCohort` - Search API for 'Cohort' entry type

### type/bio_ontology_person

* `SearchBioOntologyPerson` - Search API for 'Person' entry type

### type/bio_ontology_sample

* `SearchBioOntologySample` - Search API for 'Sample' entry type

### type/bio_ontology_series

* `SearchBioOntologySeries` - Search API for 'Series' entry type

### type/bio_ontology_study

* `SearchBioOntologyStudy` - Search API for 'Study' entry type

### type/bio_sam

* `SearchBioSam` - Search API for 'SAM Data' entry type

### type/bio_sf_pdb

* `SearchBioSfPdb` - Search API for 'PDB Protein File' entry type

### type/bio_sra

* `SearchBioSra` - Search API for 'Sequence Read Archive' entry type

### type/bio_stockholm

* `SearchBioStockholm` - Search API for 'Stockholm File' entry type

### type/bio_taxonomy

* `SearchBioTaxonomy` - Search API for 'Taxonomic Entry' entry type

### type/blogentry

* `SearchBlogentry` - Search API for 'Weblog Entry' entry type

### type/bolder_rental_housing

* `SearchBolderRentalHousing` - Search API for 'Boulder Rental Housing' entry type

### type/bookmarks

* `SearchBookmarks` - Search API for 'Bookmarks' entry type

### type/boston_crime

* `SearchBostonCrime` - Search API for 'Boston Crime' entry type

### type/boulder_2017_election_contributions

* `SearchBoulder2017ElectionContributions` - Search API for 'Boulder 2017 Election Contributions' entry type

### type/boulder_campaign_contributions

* `SearchBoulderCampaignContributions` - Search API for 'Boulder Campaign Contributions' entry type

### type/boulder_consulting_services

* `SearchBoulderConsultingServices` - Search API for 'Boulder Consulting Services Database' entry type

### type/boulder_county_voter_details

* `SearchBoulderCountyVoterDetails` - Search API for 'Boulder County Voter Details' entry type

### type/boulder_crimes

* `SearchBoulderCrimes` - Search API for 'Boulder Crime Reports' entry type

### type/boulder_emails

* `SearchBoulderEmails` - Search API for 'Boulder Council Emails' entry type

### type/boulder_employee_salaries

* `SearchBoulderEmployeeSalaries` - Search API for 'Boulder Employee Salaries' entry type

### type/calendar

* `SearchCalendar` - Search API for 'Calendar' entry type

### type/campaign_donors

* `SearchCampaignDonors` - Search API for 'Campaign Donors' entry type

### type/campaign_expenditures

* `SearchCampaignExpenditures` - Search API for 'Campaign Expenditures' entry type

### type/cataloglink

* `SearchCataloglink` - Search API for 'Catalog Link' entry type

### type/cdm_grid

* `SearchCdmGrid` - Search API for 'Gridded Data File' entry type

### type/chatroom

* `SearchChatroom` - Search API for 'Chat Room' entry type

### type/colorado_water_rights

* `SearchColoradoWaterRights` - Search API for 'Colorado Water Rights' entry type

### type/committee_donations

* `SearchCommitteeDonations` - Search API for 'Committee Donations' entry type

### type/community_datahub

* `SearchCommunityDatahub` - Search API for 'Data Hub' entry type

### type/community_resource

* `SearchCommunityResource` - Search API for 'Facility' entry type

### type/construction_permits

* `SearchConstructionPermits` - Search API for 'Construction Permits' entry type

### type/contact

* `SearchContact` - Search API for 'Contact List' entry type

### type/db_co_indicators

* `SearchDbCoIndicators` - Search API for 'Colorado Health Indicators' entry type

### type/earth_satellite_landsat

* `SearchEarthSatelliteLandsat` - Search API for 'Landsat Satellite Data' entry type

### type/faq

* `SearchFaq` - Search API for 'FAQ' entry type

### type/fec_pacs

* `SearchFecPacs` - Search API for 'FEC PACs' entry type

### type/feccandidates

* `SearchFeccandidates` - Search API for 'Candidates' entry type

### type/feed

* `SearchFeed` - Search API for 'RSS/ATOM Feed' entry type

### type/file

* `SearchFile` - Search API for 'File' entry type

### type/fits_data

* `SearchFitsData` - Search API for 'FITS Data File' entry type

### type/ftp

* `SearchFtp` - Search API for 'Remote FTP File View' entry type

### type/gadgets_countdown

* `SearchGadgetsCountdown` - Search API for 'Countdown' entry type

### type/gadgets_stock

* `SearchGadgetsStock` - Search API for 'Stock Ticker' entry type

### type/gadgets_weather

* `SearchGadgetsWeather` - Search API for 'Weather' entry type

### type/gazeteer_census_tracts

* `SearchGazeteerCensusTracts` - Search API for 'Census Tracts' entry type

### type/gazeteer_counties

* `SearchGazeteerCounties` - Search API for 'Census Gazeteer Counties' entry type

### type/geo_ge

* `SearchGeoGeojson` - Search API for 'GeoJson File' entry type

### type/geo_geotiff

* `SearchGeoGeotiff` - Search API for 'GeoTIFF' entry type

### type/geo_gpx

* `SearchGeoGpx` - Search API for 'GPX GPS File' entry type

### type/geo_hdf5

* `SearchGeoHdf5` - Search API for 'HDF5 File' entry type

### type/geo_kml

* `SearchGeoKml` - Search API for 'KML/KMZ File' entry type

### type/geo_shapefile

* `SearchGeoShapefile` - Search API for 'Shapefile' entry type

### type/geo_shapefile_fips

* `SearchGeoShapefileFips` - Search API for 'Shapefile with FIPS Code' entry type

### type/glossary

* `SearchGlossary` - Search API for 'Glossary' entry type

### type/gridaggregation

* `SearchGridaggregation` - Search API for 'Grid Aggregation' entry type

### type/group

* `SearchGroup` - Search API for 'Folder' entry type

### type/hipchat_group

* `SearchHipchatGroup` - Search API for 'HipChat Group' entry type

### type/homepage

* `SearchHomepage` - Search API for 'Home Page' entry type

### type/incident

* `SearchIncident` - Search API for 'Incident' entry type

### type/jeopardy

* `SearchJeopardy` - Search API for 'Jeopardy' entry type

### type/latlonimage

* `SearchLatlonimage` - Search API for 'Lat-Lon Image' entry type

### type/lidar_collection

* `SearchLidarCollection` - Search API for 'LiDAR Collection' entry type

### type/lidar_las

* `SearchLidarLas` - Search API for 'LAS Lidar Data' entry type

### type/lidar_lvis

* `SearchLidarLvis` - Search API for 'LVIS Lidar Data' entry type

### type/link

* `SearchLink` - Search API for 'Link' entry type

### type/localfiles

* `SearchLocalfiles` - Search API for 'Server Side Files' entry type

### type/locations

* `SearchLocations` - Search API for 'Locations' entry type

### type/map_googlemap

* `SearchMapGooglemap` - Search API for 'Google Map URL' entry type

### type/media_audiofile

* `SearchMediaAudiofile` - Search API for 'Audio File' entry type

### type/media_imageloop

* `SearchMediaImageloop` - Search API for 'Image Loop' entry type

### type/media_photoalbum

* `SearchMediaPhotoalbum` - Search API for 'Photo Album' entry type

### type/media_video_channel

* `SearchMediaVideoChannel` - Search API for 'Video Channel' entry type

### type/media_video_quicktime

* `SearchMediaVideoQuicktime` - Search API for 'Quicktime Video' entry type

### type/media_youtubevideo

* `SearchMediaYoutubevideo` - Search API for 'YouTube Video' entry type

### type/notes

* `SearchNotes` - Search API for 'Notes' entry type

### type/notes_jsonfile

* `SearchNotesJsonfile` - Search API for 'Json File' entry type

### type/notes_note

* `SearchNotesNote` - Search API for 'Note' entry type

### type/notes_notebook

* `SearchNotesNotebook` - Search API for 'Notebook' entry type

### type/nwsfeed

* `SearchNwsfeed` - Search API for 'NWS Forecast Feed' entry type

### type/opendaplink

* `SearchOpendaplink` - Search API for 'OPeNDAP Link' entry type

### type/owl.class

* `SearchOwlClass` - Search API for 'OWL Class' entry type

### type/owl.ontology

* `SearchOwlOntology` - Search API for 'OWL Ontology' entry type

### type/pasteitentry

* `SearchPasteitentry` - Search API for 'Paste Text Entry' entry type

### type/point_text

* `SearchPointText` - Search API for 'Text Point Data' entry type

### type/police_stop_data

* `SearchPoliceStopData` - Search API for 'Police Stop Data' entry type

### type/poll

* `SearchPoll` - Search API for 'Poll' entry type

### type/project_campaign

* `SearchProjectCampaign` - Search API for 'Campaign' entry type

### type/project_casestudy

* `SearchProjectCasestudy` - Search API for 'Case Study' entry type

### type/project_contribution

* `SearchProjectContribution` - Search API for 'Research Contribution' entry type

### type/project_dataformat

* `SearchProjectDataformat` - Search API for 'Data Format' entry type

### type/project_dataset

* `SearchProjectDataset` - Search API for 'Dataset' entry type

### type/project_deployment

* `SearchProjectDeployment` - Search API for 'Deployment' entry type

### type/project_experiment

* `SearchProjectExperiment` - Search API for 'Experiment' entry type

### type/project_fieldnote

* `SearchProjectFieldnote` - Search API for 'Field Note' entry type

### type/project_gps_controlpoints

* `SearchProjectGpsControlpoints` - Search API for 'Control Points File' entry type

### type/project_gps_raw

* `SearchProjectGpsRaw` - Search API for 'Raw GPS File' entry type

### type/project_gps_rinex

* `SearchProjectGpsRinex` - Search API for 'RINEX File' entry type

### type/project_instrument

* `SearchProjectInstrument` - Search API for 'Instrument Data Collection' entry type

### type/project_learning_resource

* `SearchProjectLearningResource` - Search API for 'Teaching Resource' entry type

### type/project_meeting

* `SearchProjectMeeting` - Search API for 'Meeting' entry type

### type/project_organization

* `SearchProjectOrganization` - Search API for 'Organization' entry type

### type/project_program

* `SearchProjectProgram` - Search API for 'Program' entry type

### type/project_project

* `SearchProjectProject` - Search API for 'Project' entry type

### type/project_service

* `SearchProjectService` - Search API for 'Data Access Service' entry type

### type/project_site

* `SearchProjectSite` - Search API for 'Site' entry type

### type/project_softwarepackage

* `SearchProjectSoftwarepackage` - Search API for 'Software Tool' entry type

### type/project_standard_name

* `SearchProjectStandardName` - Search API for 'Standard Parameter Name' entry type

### type/project_surveylocation

* `SearchProjectSurveylocation` - Search API for 'Survey Location' entry type

### type/project_term

* `SearchProjectTerm` - Search API for 'Vocabulary Term' entry type

### type/project_visit

* `SearchProjectVisit` - Search API for 'Site Visit' entry type

### type/project_vocabulary

* `SearchProjectVocabulary` - Search API for 'Vocabulary' entry type

### type/property_sales

* `SearchPropertySales` - Search API for 'Property Sales' entry type

### type/propertydb

* `SearchPropertydb` - Search API for 'Property Database' entry type

### type/python_notebook

* `SearchPythonNotebook` - Search API for 'IPython Notebook file' entry type

### type/slack_team

* `SearchSlackTeam` - Search API for 'Slack Team' entry type

### type/statusboard

* `SearchStatusboard` - Search API for 'Status Board' entry type

### type/sunrisesunset

* `SearchSunrisesunset` - Search API for 'Sunrise/Sunset Display' entry type

### type/tasks

* `SearchTasks` - Search API for 'Tasks' entry type

### type/tmdbmovies

* `SearchTmdbmovies` - Search API for 'Tmdb Movies' entry type

### type/todo

* `SearchTodo` - Search API for 'Todo' entry type

### type/trip_event

* `SearchTripEvent` - Search API for 'Event' entry type

### type/trip_flight

* `SearchTripFlight` - Search API for 'Flight Leg' entry type

### type/trip_hotel

* `SearchTripHotel` - Search API for 'Lodging' entry type

### type/trip_report

* `SearchTripReport` - Search API for 'Trip Report' entry type

### type/trip_trip

* `SearchTripTrip` - Search API for 'Trip' entry type

### type/type_awc_metar

* `SearchTypeAwcMetar` - Search API for 'AWC Weather Observations' entry type

### type/type_biz_stockseries

* `SearchTypeBizStockseries` - Search API for 'Stock Ticker Data' entry type

### type/type_bls_series

* `SearchTypeBlsSeries` - Search API for 'BLS Series' entry type

### type/type_bls_survey

* `SearchTypeBlsSurvey` - Search API for 'BLS Survey' entry type

### type/type_census_acs

* `SearchTypeCensusAcs` - Search API for 'US Census ACS Data' entry type

### type/type_daymet

* `SearchTypeDaymet` - Search API for 'Daymet Daily Weather' entry type

### type/type_db_table

* `SearchTypeDbTable` - Search API for 'Database Table' entry type

### type/type_document_csv

* `SearchTypeDocumentCsv` - Search API for 'CSV File' entry type

### type/type_document_doc

* `SearchTypeDocumentDoc` - Search API for 'Word File' entry type

### type/type_document_html

* `SearchTypeDocumentHTML` - Search API for 'HTML File' entry type

### type/type_document_pdf

* `SearchTypeDocumentPdf` - Search API for 'PDF File' entry type

### type/type_document_ppt

* `SearchTypeDocumentPpt` - Search API for 'Powerpoint File' entry type

### type/type_document_xls

* `SearchTypeDocumentXls` - Search API for 'Excel File' entry type

### type/type_drilsdown_casestudy

* `SearchTypeDrilsdownCasestudy` - Search API for 'Drilsdown Case Study' entry type

### type/type_edgar_filing

* `SearchTypeEdgarFiling` - Search API for 'SEC EDGAR Filing' entry type

### type/type_eia_category

* `SearchTypeEiaCategory` - Search API for 'EIA Category' entry type

### type/type_eia_series

* `SearchTypeEiaSeries` - Search API for 'EIA Series' entry type

### type/type_esri_featureserver

* `SearchTypeEsriFeatureserver` - Search API for 'ESRI Feature Server' entry type

### type/type_esri_geometryserver

* `SearchTypeEsriGeometryserver` - Search API for 'ESRI Geometry Server' entry type

### type/type_esri_gpserver

* `SearchTypeEsriGpserver` - Search API for 'ESRI GP Server' entry type

### type/type_esri_imageserver

* `SearchTypeEsriImageserver` - Search API for 'ESRI Image Server' entry type

### type/type_esri_layer

* `SearchTypeEsriLayer` - Search API for 'ESRI Layer' entry type

### type/type_esri_mapserver

* `SearchTypeEsriMapserver` - Search API for 'ESRI Map Server' entry type

### type/type_esri_restfolder

* `SearchTypeEsriRestfolder` - Search API for 'ESRI Services Folder' entry type

### type/type_esri_restserver

* `SearchTypeEsriRestserver` - Search API for 'ESRI Web Server' entry type

### type/type_esri_restservice

* `SearchTypeEsriRestservice` - Search API for 'ESRI Rest Service' entry type

### type/type_extremes

* `SearchTypeExtremes` - Search API for 'NOAA Extremes Data' entry type

### type/type_fred_category

* `SearchTypeFredCategory` - Search API for 'FRED Category' entry type

### type/type_fred_series

* `SearchTypeFredSeries` - Search API for 'FRED Series' entry type

### type/type_gtfs_agency

* `SearchTypeGtfsAgency` - Search API for 'Transit Agency' entry type

### type/type_gtfs_route

* `SearchTypeGtfsRoute` - Search API for 'Transit Route' entry type

### type/type_gtfs_routes

* `SearchTypeGtfsRoutes` - Search API for 'Transit Route Collection' entry type

### type/type_gtfs_stop

* `SearchTypeGtfsStop` - Search API for 'Transit Stop' entry type

### type/type_gtfs_stops

* `SearchTypeGtfsStops` - Search API for 'Transit Stop Collection' entry type

### type/type_gtfs_trip

* `SearchTypeGtfsTrip` - Search API for 'Transit Trip' entry type

### type/type_hazarddata

* `SearchTypeHazarddata` - Search API for 'Hazard Data' entry type

### type/type_hydro_colorado

* `SearchTypeHydroColorado` - Search API for 'Colorado DNR Stream Gage' entry type

### type/type_idv_bundle

* `SearchTypeIdvBundle` - Search API for 'IDV Bundle' entry type

### type/type_image

* `SearchTypeImage` - Search API for 'Image' entry type

### type/type_image_airport

* `SearchTypeImageAirport` - Search API for 'Airport Image' entry type

### type/type_image_webcam

* `SearchTypeImageWebcam` - Search API for 'Webcam' entry type

### type/type_mb

* `SearchTypeMb` - Search API for 'MB Bathymetry' entry type

### type/type_mb_collection

* `SearchTypeMbCollection` - Search API for 'Bathymetry Collection' entry type

### type/type_mb_point_basic

* `SearchTypeMbPointBasic` - Search API for 'Basic MB point file' entry type

### type/type_metameta_dictionary

* `SearchTypeMetametaDictionary` - Search API for 'Metadata Dictionary' entry type

### type/type_metameta_field

* `SearchTypeMetametaField` - Search API for 'Metadata Field' entry type

### type/type_nasaames

* `SearchTypeNasaames` - Search API for 'NASA AMES File' entry type

### type/type_ncss

* `SearchTypeNcss` - Search API for 'NetCDF Point Subset' entry type

### type/type_nitf

* `SearchTypeNitf` - Search API for 'NITF File' entry type

### type/type_point_ameriflux_level2

* `SearchTypePointAmerifluxLevel2` - Search API for 'Ameriflux Level 2 CSV File' entry type

### type/type_point_amrc_final

* `SearchTypePointAmrcFinal` - Search API for 'AMRC Final QC Data' entry type

### type/type_point_amrc_freewave

* `SearchTypePointAmrcFreewave` - Search API for 'AMRC Freewave  Data' entry type

### type/type_point_czo

* `SearchTypePointCzo` - Search API for 'CZO Display File Format' entry type

### type/type_point_gcnet

* `SearchTypePointGcnet` - Search API for 'GC-Net Point Data' entry type

### type/type_point_geomag_iaga2002

* `SearchTypePointGeomagIaga2002` - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### type/type_point_hydro_waterml

* `SearchTypePointHydroWaterml` - Search API for 'WaterML' entry type

### type/type_point_icebridge_atm_icessn

* `SearchTypePointIcebridgeAtmIcessn` - Search API for 'ATM Ice SSN Data' entry type

### type/type_point_icebridge_atm_qfit

* `SearchTypePointIcebridgeAtmQfit` - Search API for 'ATM QFIT Data' entry type

### type/type_point_icebridge_mccords_irmcr2

* `SearchTypePointIcebridgeMccordsIrmcr2` - Search API for 'McCords Irmcr2 Data' entry type

### type/type_point_icebridge_mccords_irmcr3

* `SearchTypePointIcebridgeMccordsIrmcr3` - Search API for 'McCords Irmcr3 Data' entry type

### type/type_point_icebridge_paris

* `SearchTypePointIcebridgeParis` - Search API for 'Paris Data' entry type

### type/type_point_idv

* `SearchTypePointIdv` - Search API for 'IDV Point File' entry type

### type/type_point_inline

* `SearchTypePointInline` - Search API for 'Inline Point File' entry type

### type/type_point_ncdc_climate

* `SearchTypePointNcdcClimate` - Search API for 'NC  DC Climate Data' entry type

### type/type_point_netcdf

* `SearchTypePointNetcdf` - Search API for 'NetCDF Point File' entry type

### type/type_point_noaa_carbon

* `SearchTypePointNoaaCarbon` - Search API for 'NOAA Carbon Measurements' entry type

### type/type_point_noaa_flask_event

* `SearchTypePointNoaaFlaskEvent` - Search API for 'NOAA Flask Event Measurements' entry type

### type/type_point_noaa_flask_month

* `SearchTypePointNoaaFlaskMonth` - Search API for 'NOAA Flask Month Measurements' entry type

### type/type_point_noaa_madis

* `SearchTypePointNoaaMadis` - Search API for 'NOAA MADIS Point Data' entry type

### type/type_point_noaa_tower

* `SearchTypePointNoaaTower` - Search API for 'NOAA Tower Network' entry type

### type/type_point_ocean_cnv

* `SearchTypePointOceanCnv` - Search API for 'SeaBird CNV Data' entry type

### type/type_point_ocean_csv_sado_TTS

* `SearchTypePointOceanCsvSadoTts` - Search API for 'SADO TTS Data' entry type

### type/type_point_ocean_csv_sado_meteo

* `SearchTypePointOceanCsvSadoMeteo` - Search API for 'SADO Meteo Data' entry type

### type/type_point_ocean_csv_sado_position

* `SearchTypePointOceanCsvSadoPosition` - Search API for 'SADO Position Data' entry type

### type/type_point_ocean_netcdf_glider

* `SearchTypePointOceanNetcdfGlider` - Search API for 'NetCDF Glider Data' entry type

### type/type_point_ocean_netcdf_track

* `SearchTypePointOceanNetcdfTrack` - Search API for 'NetCDF Track Data' entry type

### type/type_point_ocean_ooi_dmgx

* `SearchTypePointOceanOoiDmgx` - Search API for 'OOI Data' entry type

### type/type_point_openaq

* `SearchTypePointOpenaq` - Search API for 'Open AQ Air Quality' entry type

### type/type_point_pbo_position_time_series

* `SearchTypePointPboPositionTimeSeries` - Search API for 'PBO Position Time Series' entry type

### type/type_point_simple_records

* `SearchTypePointSimpleRecords` - Search API for 'Simple Records' entry type

### type/type_point_snotel

* `SearchTypePointSnotel` - Search API for 'SNOTEL Snow Data' entry type

### type/type_point_text

* `SearchTypePointText` - Search API for 'Record Text File' entry type

### type/type_point_wsbb_ggp

* `SearchTypePointWsbbGgp` - Search API for 'Global Geodynamics GGP Format' entry type

### type/type_psd_monthly_climate_index

* `SearchTypePsdMonthlyClimateIndex` - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### type/type_quandl_series

* `SearchTypeQuandlSeries` - Search API for 'QUANDL Series' entry type

### type/type_service_group

* `SearchTypeServiceGroup` - Search API for 'Service Group' entry type

### type/type_service_link

* `SearchTypeServiceLink` - Search API for 'Service Link' entry type

### type/type_socrata_series

* `SearchTypeSocrataSeries` - Search API for 'SOCRATA Series' entry type

### type/type_sounding_cod

* `SearchTypeSoundingCod` - Search API for 'COD Sounding' entry type

### type/type_sounding_frd

* `SearchTypeSoundingFrd` - Search API for 'FRD Sounding' entry type

### type/type_sounding_gsd

* `SearchTypeSoundingGsd` - Search API for 'GSD Sounding' entry type

### type/type_sounding_wyoming

* `SearchTypeSoundingWyoming` - Search API for 'UW Sounding' entry type

### type/type_tmy

* `SearchTypeTmy` - Search API for 'NREL TMY Data' entry type

### type/type_tweet

* `SearchTypeTweet` - Search API for 'Tweet' entry type

### type/type_usgs_gauge

* `SearchTypeUsgsGauge` - Search API for 'USGS Stream Gauge' entry type

### type/type_virtual

* `SearchTypeVirtual` - Search API for 'Virtual Group' entry type

### type/type_wms_capabilities

* `SearchTypeWmsCapabilities` - Search API for 'WMS Capabilities' entry type

### type/type_wms_layer

* `SearchTypeWmsLayer` - Search API for 'WMS Layer' entry type

### type/ufo_sightings

* `SearchUfoSightings` - Search API for 'Ufo Sightings' entry type

### type/us_places

* `SearchUsPlaces` - Search API for 'US Places' entry type

### type/vote_yesno

* `SearchVoteYesno` - Search API for 'Simple Yes-No Vote' entry type

### type/weblog

* `SearchWeblog` - Search API for 'Weblog' entry type

### type/wikipage

* `SearchWikipage` - Search API for 'Wiki Page' entry type

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
