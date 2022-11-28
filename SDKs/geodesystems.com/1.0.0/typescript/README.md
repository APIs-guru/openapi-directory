# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { MediaTabularExtractsheetRequest, MediaTabularExtractsheetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MediaTabularExtractsheetRequest = {
  queryParams: {
    arg1: "quae",
    entryid: "rerum",
    output: "vero",
  },
};

sdk.serviceMediaTabularExtractsheet.mediaTabularExtractsheet(req).then((res: MediaTabularExtractsheetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### service/media_tabular_extractsheet

* `mediaTabularExtractsheet` - API for Extract sheets

### type/2017_boulder_election_expenditures

* `search2017BoulderElectionExpenditures` - Search API for '2017 Boulder Election Expenditures' entry type

### type/any

* `searchAny` - Search API for 'Any file type' entry type

### type/beforeafter

* `searchBeforeafter` - Search API for 'Before and After Images' entry type

### type/biblio

* `searchBiblio` - Search API for 'Bibliographic Entry' entry type

### type/bio_dicom

* `searchBioDicom` - Search API for 'DICOM File' entry type

### type/bio_dicom_test

* `searchBioDicomTest` - Search API for 'DICOM Test File' entry type

### type/bio_fasta

* `searchBioFasta` - Search API for 'FASTA File' entry type

### type/bio_fastq

* `searchBioFastq` - Search API for 'FASTQ File' entry type

### type/bio_hmmer_index

* `searchBioHmmerIndex` - Search API for 'HMMER Index File' entry type

### type/bio_ome_tiff

* `searchBioOmeTiff` - Search API for 'OME TIFF File' entry type

### type/bio_ontology_assay

* `searchBioOntologyAssay` - Search API for 'Assay' entry type

### type/bio_ontology_cohort

* `searchBioOntologyCohort` - Search API for 'Cohort' entry type

### type/bio_ontology_person

* `searchBioOntologyPerson` - Search API for 'Person' entry type

### type/bio_ontology_sample

* `searchBioOntologySample` - Search API for 'Sample' entry type

### type/bio_ontology_series

* `searchBioOntologySeries` - Search API for 'Series' entry type

### type/bio_ontology_study

* `searchBioOntologyStudy` - Search API for 'Study' entry type

### type/bio_sam

* `searchBioSam` - Search API for 'SAM Data' entry type

### type/bio_sf_pdb

* `searchBioSfPdb` - Search API for 'PDB Protein File' entry type

### type/bio_sra

* `searchBioSra` - Search API for 'Sequence Read Archive' entry type

### type/bio_stockholm

* `searchBioStockholm` - Search API for 'Stockholm File' entry type

### type/bio_taxonomy

* `searchBioTaxonomy` - Search API for 'Taxonomic Entry' entry type

### type/blogentry

* `searchBlogentry` - Search API for 'Weblog Entry' entry type

### type/bolder_rental_housing

* `searchBolderRentalHousing` - Search API for 'Boulder Rental Housing' entry type

### type/bookmarks

* `searchBookmarks` - Search API for 'Bookmarks' entry type

### type/boston_crime

* `searchBostonCrime` - Search API for 'Boston Crime' entry type

### type/boulder_2017_election_contributions

* `searchBoulder2017ElectionContributions` - Search API for 'Boulder 2017 Election Contributions' entry type

### type/boulder_campaign_contributions

* `searchBoulderCampaignContributions` - Search API for 'Boulder Campaign Contributions' entry type

### type/boulder_consulting_services

* `searchBoulderConsultingServices` - Search API for 'Boulder Consulting Services Database' entry type

### type/boulder_county_voter_details

* `searchBoulderCountyVoterDetails` - Search API for 'Boulder County Voter Details' entry type

### type/boulder_crimes

* `searchBoulderCrimes` - Search API for 'Boulder Crime Reports' entry type

### type/boulder_emails

* `searchBoulderEmails` - Search API for 'Boulder Council Emails' entry type

### type/boulder_employee_salaries

* `searchBoulderEmployeeSalaries` - Search API for 'Boulder Employee Salaries' entry type

### type/calendar

* `searchCalendar` - Search API for 'Calendar' entry type

### type/campaign_donors

* `searchCampaignDonors` - Search API for 'Campaign Donors' entry type

### type/campaign_expenditures

* `searchCampaignExpenditures` - Search API for 'Campaign Expenditures' entry type

### type/cataloglink

* `searchCataloglink` - Search API for 'Catalog Link' entry type

### type/cdm_grid

* `searchCdmGrid` - Search API for 'Gridded Data File' entry type

### type/chatroom

* `searchChatroom` - Search API for 'Chat Room' entry type

### type/colorado_water_rights

* `searchColoradoWaterRights` - Search API for 'Colorado Water Rights' entry type

### type/committee_donations

* `searchCommitteeDonations` - Search API for 'Committee Donations' entry type

### type/community_datahub

* `searchCommunityDatahub` - Search API for 'Data Hub' entry type

### type/community_resource

* `searchCommunityResource` - Search API for 'Facility' entry type

### type/construction_permits

* `searchConstructionPermits` - Search API for 'Construction Permits' entry type

### type/contact

* `searchContact` - Search API for 'Contact List' entry type

### type/db_co_indicators

* `searchDbCoIndicators` - Search API for 'Colorado Health Indicators' entry type

### type/earth_satellite_landsat

* `searchEarthSatelliteLandsat` - Search API for 'Landsat Satellite Data' entry type

### type/faq

* `searchFaq` - Search API for 'FAQ' entry type

### type/fec_pacs

* `searchFecPacs` - Search API for 'FEC PACs' entry type

### type/feccandidates

* `searchFeccandidates` - Search API for 'Candidates' entry type

### type/feed

* `searchFeed` - Search API for 'RSS/ATOM Feed' entry type

### type/file

* `searchFile` - Search API for 'File' entry type

### type/fits_data

* `searchFitsData` - Search API for 'FITS Data File' entry type

### type/ftp

* `searchFtp` - Search API for 'Remote FTP File View' entry type

### type/gadgets_countdown

* `searchGadgetsCountdown` - Search API for 'Countdown' entry type

### type/gadgets_stock

* `searchGadgetsStock` - Search API for 'Stock Ticker' entry type

### type/gadgets_weather

* `searchGadgetsWeather` - Search API for 'Weather' entry type

### type/gazeteer_census_tracts

* `searchGazeteerCensusTracts` - Search API for 'Census Tracts' entry type

### type/gazeteer_counties

* `searchGazeteerCounties` - Search API for 'Census Gazeteer Counties' entry type

### type/geo_ge

* `searchGeoGeojson` - Search API for 'GeoJson File' entry type

### type/geo_geotiff

* `searchGeoGeotiff` - Search API for 'GeoTIFF' entry type

### type/geo_gpx

* `searchGeoGpx` - Search API for 'GPX GPS File' entry type

### type/geo_hdf5

* `searchGeoHdf5` - Search API for 'HDF5 File' entry type

### type/geo_kml

* `searchGeoKml` - Search API for 'KML/KMZ File' entry type

### type/geo_shapefile

* `searchGeoShapefile` - Search API for 'Shapefile' entry type

### type/geo_shapefile_fips

* `searchGeoShapefileFips` - Search API for 'Shapefile with FIPS Code' entry type

### type/glossary

* `searchGlossary` - Search API for 'Glossary' entry type

### type/gridaggregation

* `searchGridaggregation` - Search API for 'Grid Aggregation' entry type

### type/group

* `searchGroup` - Search API for 'Folder' entry type

### type/hipchat_group

* `searchHipchatGroup` - Search API for 'HipChat Group' entry type

### type/homepage

* `searchHomepage` - Search API for 'Home Page' entry type

### type/incident

* `searchIncident` - Search API for 'Incident' entry type

### type/jeopardy

* `searchJeopardy` - Search API for 'Jeopardy' entry type

### type/latlonimage

* `searchLatlonimage` - Search API for 'Lat-Lon Image' entry type

### type/lidar_collection

* `searchLidarCollection` - Search API for 'LiDAR Collection' entry type

### type/lidar_las

* `searchLidarLas` - Search API for 'LAS Lidar Data' entry type

### type/lidar_lvis

* `searchLidarLvis` - Search API for 'LVIS Lidar Data' entry type

### type/link

* `searchLink` - Search API for 'Link' entry type

### type/localfiles

* `searchLocalfiles` - Search API for 'Server Side Files' entry type

### type/locations

* `searchLocations` - Search API for 'Locations' entry type

### type/map_googlemap

* `searchMapGooglemap` - Search API for 'Google Map URL' entry type

### type/media_audiofile

* `searchMediaAudiofile` - Search API for 'Audio File' entry type

### type/media_imageloop

* `searchMediaImageloop` - Search API for 'Image Loop' entry type

### type/media_photoalbum

* `searchMediaPhotoalbum` - Search API for 'Photo Album' entry type

### type/media_video_channel

* `searchMediaVideoChannel` - Search API for 'Video Channel' entry type

### type/media_video_quicktime

* `searchMediaVideoQuicktime` - Search API for 'Quicktime Video' entry type

### type/media_youtubevideo

* `searchMediaYoutubevideo` - Search API for 'YouTube Video' entry type

### type/notes

* `searchNotes` - Search API for 'Notes' entry type

### type/notes_jsonfile

* `searchNotesJsonfile` - Search API for 'Json File' entry type

### type/notes_note

* `searchNotesNote` - Search API for 'Note' entry type

### type/notes_notebook

* `searchNotesNotebook` - Search API for 'Notebook' entry type

### type/nwsfeed

* `searchNwsfeed` - Search API for 'NWS Forecast Feed' entry type

### type/opendaplink

* `searchOpendaplink` - Search API for 'OPeNDAP Link' entry type

### type/owl.class

* `searchOwlClass` - Search API for 'OWL Class' entry type

### type/owl.ontology

* `searchOwlOntology` - Search API for 'OWL Ontology' entry type

### type/pasteitentry

* `searchPasteitentry` - Search API for 'Paste Text Entry' entry type

### type/point_text

* `searchPointText` - Search API for 'Text Point Data' entry type

### type/police_stop_data

* `searchPoliceStopData` - Search API for 'Police Stop Data' entry type

### type/poll

* `searchPoll` - Search API for 'Poll' entry type

### type/project_campaign

* `searchProjectCampaign` - Search API for 'Campaign' entry type

### type/project_casestudy

* `searchProjectCasestudy` - Search API for 'Case Study' entry type

### type/project_contribution

* `searchProjectContribution` - Search API for 'Research Contribution' entry type

### type/project_dataformat

* `searchProjectDataformat` - Search API for 'Data Format' entry type

### type/project_dataset

* `searchProjectDataset` - Search API for 'Dataset' entry type

### type/project_deployment

* `searchProjectDeployment` - Search API for 'Deployment' entry type

### type/project_experiment

* `searchProjectExperiment` - Search API for 'Experiment' entry type

### type/project_fieldnote

* `searchProjectFieldnote` - Search API for 'Field Note' entry type

### type/project_gps_controlpoints

* `searchProjectGpsControlpoints` - Search API for 'Control Points File' entry type

### type/project_gps_raw

* `searchProjectGpsRaw` - Search API for 'Raw GPS File' entry type

### type/project_gps_rinex

* `searchProjectGpsRinex` - Search API for 'RINEX File' entry type

### type/project_instrument

* `searchProjectInstrument` - Search API for 'Instrument Data Collection' entry type

### type/project_learning_resource

* `searchProjectLearningResource` - Search API for 'Teaching Resource' entry type

### type/project_meeting

* `searchProjectMeeting` - Search API for 'Meeting' entry type

### type/project_organization

* `searchProjectOrganization` - Search API for 'Organization' entry type

### type/project_program

* `searchProjectProgram` - Search API for 'Program' entry type

### type/project_project

* `searchProjectProject` - Search API for 'Project' entry type

### type/project_service

* `searchProjectService` - Search API for 'Data Access Service' entry type

### type/project_site

* `searchProjectSite` - Search API for 'Site' entry type

### type/project_softwarepackage

* `searchProjectSoftwarepackage` - Search API for 'Software Tool' entry type

### type/project_standard_name

* `searchProjectStandardName` - Search API for 'Standard Parameter Name' entry type

### type/project_surveylocation

* `searchProjectSurveylocation` - Search API for 'Survey Location' entry type

### type/project_term

* `searchProjectTerm` - Search API for 'Vocabulary Term' entry type

### type/project_visit

* `searchProjectVisit` - Search API for 'Site Visit' entry type

### type/project_vocabulary

* `searchProjectVocabulary` - Search API for 'Vocabulary' entry type

### type/property_sales

* `searchPropertySales` - Search API for 'Property Sales' entry type

### type/propertydb

* `searchPropertydb` - Search API for 'Property Database' entry type

### type/python_notebook

* `searchPythonNotebook` - Search API for 'IPython Notebook file' entry type

### type/slack_team

* `searchSlackTeam` - Search API for 'Slack Team' entry type

### type/statusboard

* `searchStatusboard` - Search API for 'Status Board' entry type

### type/sunrisesunset

* `searchSunrisesunset` - Search API for 'Sunrise/Sunset Display' entry type

### type/tasks

* `searchTasks` - Search API for 'Tasks' entry type

### type/tmdbmovies

* `searchTmdbmovies` - Search API for 'Tmdb Movies' entry type

### type/todo

* `searchTodo` - Search API for 'Todo' entry type

### type/trip_event

* `searchTripEvent` - Search API for 'Event' entry type

### type/trip_flight

* `searchTripFlight` - Search API for 'Flight Leg' entry type

### type/trip_hotel

* `searchTripHotel` - Search API for 'Lodging' entry type

### type/trip_report

* `searchTripReport` - Search API for 'Trip Report' entry type

### type/trip_trip

* `searchTripTrip` - Search API for 'Trip' entry type

### type/type_awc_metar

* `searchTypeAwcMetar` - Search API for 'AWC Weather Observations' entry type

### type/type_biz_stockseries

* `searchTypeBizStockseries` - Search API for 'Stock Ticker Data' entry type

### type/type_bls_series

* `searchTypeBlsSeries` - Search API for 'BLS Series' entry type

### type/type_bls_survey

* `searchTypeBlsSurvey` - Search API for 'BLS Survey' entry type

### type/type_census_acs

* `searchTypeCensusAcs` - Search API for 'US Census ACS Data' entry type

### type/type_daymet

* `searchTypeDaymet` - Search API for 'Daymet Daily Weather' entry type

### type/type_db_table

* `searchTypeDbTable` - Search API for 'Database Table' entry type

### type/type_document_csv

* `searchTypeDocumentCsv` - Search API for 'CSV File' entry type

### type/type_document_doc

* `searchTypeDocumentDoc` - Search API for 'Word File' entry type

### type/type_document_html

* `searchTypeDocumentHtml` - Search API for 'HTML File' entry type

### type/type_document_pdf

* `searchTypeDocumentPdf` - Search API for 'PDF File' entry type

### type/type_document_ppt

* `searchTypeDocumentPpt` - Search API for 'Powerpoint File' entry type

### type/type_document_xls

* `searchTypeDocumentXls` - Search API for 'Excel File' entry type

### type/type_drilsdown_casestudy

* `searchTypeDrilsdownCasestudy` - Search API for 'Drilsdown Case Study' entry type

### type/type_edgar_filing

* `searchTypeEdgarFiling` - Search API for 'SEC EDGAR Filing' entry type

### type/type_eia_category

* `searchTypeEiaCategory` - Search API for 'EIA Category' entry type

### type/type_eia_series

* `searchTypeEiaSeries` - Search API for 'EIA Series' entry type

### type/type_esri_featureserver

* `searchTypeEsriFeatureserver` - Search API for 'ESRI Feature Server' entry type

### type/type_esri_geometryserver

* `searchTypeEsriGeometryserver` - Search API for 'ESRI Geometry Server' entry type

### type/type_esri_gpserver

* `searchTypeEsriGpserver` - Search API for 'ESRI GP Server' entry type

### type/type_esri_imageserver

* `searchTypeEsriImageserver` - Search API for 'ESRI Image Server' entry type

### type/type_esri_layer

* `searchTypeEsriLayer` - Search API for 'ESRI Layer' entry type

### type/type_esri_mapserver

* `searchTypeEsriMapserver` - Search API for 'ESRI Map Server' entry type

### type/type_esri_restfolder

* `searchTypeEsriRestfolder` - Search API for 'ESRI Services Folder' entry type

### type/type_esri_restserver

* `searchTypeEsriRestserver` - Search API for 'ESRI Web Server' entry type

### type/type_esri_restservice

* `searchTypeEsriRestservice` - Search API for 'ESRI Rest Service' entry type

### type/type_extremes

* `searchTypeExtremes` - Search API for 'NOAA Extremes Data' entry type

### type/type_fred_category

* `searchTypeFredCategory` - Search API for 'FRED Category' entry type

### type/type_fred_series

* `searchTypeFredSeries` - Search API for 'FRED Series' entry type

### type/type_gtfs_agency

* `searchTypeGtfsAgency` - Search API for 'Transit Agency' entry type

### type/type_gtfs_route

* `searchTypeGtfsRoute` - Search API for 'Transit Route' entry type

### type/type_gtfs_routes

* `searchTypeGtfsRoutes` - Search API for 'Transit Route Collection' entry type

### type/type_gtfs_stop

* `searchTypeGtfsStop` - Search API for 'Transit Stop' entry type

### type/type_gtfs_stops

* `searchTypeGtfsStops` - Search API for 'Transit Stop Collection' entry type

### type/type_gtfs_trip

* `searchTypeGtfsTrip` - Search API for 'Transit Trip' entry type

### type/type_hazarddata

* `searchTypeHazarddata` - Search API for 'Hazard Data' entry type

### type/type_hydro_colorado

* `searchTypeHydroColorado` - Search API for 'Colorado DNR Stream Gage' entry type

### type/type_idv_bundle

* `searchTypeIdvBundle` - Search API for 'IDV Bundle' entry type

### type/type_image

* `searchTypeImage` - Search API for 'Image' entry type

### type/type_image_airport

* `searchTypeImageAirport` - Search API for 'Airport Image' entry type

### type/type_image_webcam

* `searchTypeImageWebcam` - Search API for 'Webcam' entry type

### type/type_mb

* `searchTypeMb` - Search API for 'MB Bathymetry' entry type

### type/type_mb_collection

* `searchTypeMbCollection` - Search API for 'Bathymetry Collection' entry type

### type/type_mb_point_basic

* `searchTypeMbPointBasic` - Search API for 'Basic MB point file' entry type

### type/type_metameta_dictionary

* `searchTypeMetametaDictionary` - Search API for 'Metadata Dictionary' entry type

### type/type_metameta_field

* `searchTypeMetametaField` - Search API for 'Metadata Field' entry type

### type/type_nasaames

* `searchTypeNasaames` - Search API for 'NASA AMES File' entry type

### type/type_ncss

* `searchTypeNcss` - Search API for 'NetCDF Point Subset' entry type

### type/type_nitf

* `searchTypeNitf` - Search API for 'NITF File' entry type

### type/type_point_ameriflux_level2

* `searchTypePointAmerifluxLevel2` - Search API for 'Ameriflux Level 2 CSV File' entry type

### type/type_point_amrc_final

* `searchTypePointAmrcFinal` - Search API for 'AMRC Final QC Data' entry type

### type/type_point_amrc_freewave

* `searchTypePointAmrcFreewave` - Search API for 'AMRC Freewave  Data' entry type

### type/type_point_czo

* `searchTypePointCzo` - Search API for 'CZO Display File Format' entry type

### type/type_point_gcnet

* `searchTypePointGcnet` - Search API for 'GC-Net Point Data' entry type

### type/type_point_geomag_iaga2002

* `searchTypePointGeomagIaga2002` - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### type/type_point_hydro_waterml

* `searchTypePointHydroWaterml` - Search API for 'WaterML' entry type

### type/type_point_icebridge_atm_icessn

* `searchTypePointIcebridgeAtmIcessn` - Search API for 'ATM Ice SSN Data' entry type

### type/type_point_icebridge_atm_qfit

* `searchTypePointIcebridgeAtmQfit` - Search API for 'ATM QFIT Data' entry type

### type/type_point_icebridge_mccords_irmcr2

* `searchTypePointIcebridgeMccordsIrmcr2` - Search API for 'McCords Irmcr2 Data' entry type

### type/type_point_icebridge_mccords_irmcr3

* `searchTypePointIcebridgeMccordsIrmcr3` - Search API for 'McCords Irmcr3 Data' entry type

### type/type_point_icebridge_paris

* `searchTypePointIcebridgeParis` - Search API for 'Paris Data' entry type

### type/type_point_idv

* `searchTypePointIdv` - Search API for 'IDV Point File' entry type

### type/type_point_inline

* `searchTypePointInline` - Search API for 'Inline Point File' entry type

### type/type_point_ncdc_climate

* `searchTypePointNcdcClimate` - Search API for 'NC  DC Climate Data' entry type

### type/type_point_netcdf

* `searchTypePointNetcdf` - Search API for 'NetCDF Point File' entry type

### type/type_point_noaa_carbon

* `searchTypePointNoaaCarbon` - Search API for 'NOAA Carbon Measurements' entry type

### type/type_point_noaa_flask_event

* `searchTypePointNoaaFlaskEvent` - Search API for 'NOAA Flask Event Measurements' entry type

### type/type_point_noaa_flask_month

* `searchTypePointNoaaFlaskMonth` - Search API for 'NOAA Flask Month Measurements' entry type

### type/type_point_noaa_madis

* `searchTypePointNoaaMadis` - Search API for 'NOAA MADIS Point Data' entry type

### type/type_point_noaa_tower

* `searchTypePointNoaaTower` - Search API for 'NOAA Tower Network' entry type

### type/type_point_ocean_cnv

* `searchTypePointOceanCnv` - Search API for 'SeaBird CNV Data' entry type

### type/type_point_ocean_csv_sado_TTS

* `searchTypePointOceanCsvSadoTts` - Search API for 'SADO TTS Data' entry type

### type/type_point_ocean_csv_sado_meteo

* `searchTypePointOceanCsvSadoMeteo` - Search API for 'SADO Meteo Data' entry type

### type/type_point_ocean_csv_sado_position

* `searchTypePointOceanCsvSadoPosition` - Search API for 'SADO Position Data' entry type

### type/type_point_ocean_netcdf_glider

* `searchTypePointOceanNetcdfGlider` - Search API for 'NetCDF Glider Data' entry type

### type/type_point_ocean_netcdf_track

* `searchTypePointOceanNetcdfTrack` - Search API for 'NetCDF Track Data' entry type

### type/type_point_ocean_ooi_dmgx

* `searchTypePointOceanOoiDmgx` - Search API for 'OOI Data' entry type

### type/type_point_openaq

* `searchTypePointOpenaq` - Search API for 'Open AQ Air Quality' entry type

### type/type_point_pbo_position_time_series

* `searchTypePointPboPositionTimeSeries` - Search API for 'PBO Position Time Series' entry type

### type/type_point_simple_records

* `searchTypePointSimpleRecords` - Search API for 'Simple Records' entry type

### type/type_point_snotel

* `searchTypePointSnotel` - Search API for 'SNOTEL Snow Data' entry type

### type/type_point_text

* `searchTypePointText` - Search API for 'Record Text File' entry type

### type/type_point_wsbb_ggp

* `searchTypePointWsbbGgp` - Search API for 'Global Geodynamics GGP Format' entry type

### type/type_psd_monthly_climate_index

* `searchTypePsdMonthlyClimateIndex` - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### type/type_quandl_series

* `searchTypeQuandlSeries` - Search API for 'QUANDL Series' entry type

### type/type_service_group

* `searchTypeServiceGroup` - Search API for 'Service Group' entry type

### type/type_service_link

* `searchTypeServiceLink` - Search API for 'Service Link' entry type

### type/type_socrata_series

* `searchTypeSocrataSeries` - Search API for 'SOCRATA Series' entry type

### type/type_sounding_cod

* `searchTypeSoundingCod` - Search API for 'COD Sounding' entry type

### type/type_sounding_frd

* `searchTypeSoundingFrd` - Search API for 'FRD Sounding' entry type

### type/type_sounding_gsd

* `searchTypeSoundingGsd` - Search API for 'GSD Sounding' entry type

### type/type_sounding_wyoming

* `searchTypeSoundingWyoming` - Search API for 'UW Sounding' entry type

### type/type_tmy

* `searchTypeTmy` - Search API for 'NREL TMY Data' entry type

### type/type_tweet

* `searchTypeTweet` - Search API for 'Tweet' entry type

### type/type_usgs_gauge

* `searchTypeUsgsGauge` - Search API for 'USGS Stream Gauge' entry type

### type/type_virtual

* `searchTypeVirtual` - Search API for 'Virtual Group' entry type

### type/type_wms_capabilities

* `searchTypeWmsCapabilities` - Search API for 'WMS Capabilities' entry type

### type/type_wms_layer

* `searchTypeWmsLayer` - Search API for 'WMS Layer' entry type

### type/ufo_sightings

* `searchUfoSightings` - Search API for 'Ufo Sightings' entry type

### type/us_places

* `searchUsPlaces` - Search API for 'US Places' entry type

### type/vote_yesno

* `searchVoteYesno` - Search API for 'Simple Yes-No Vote' entry type

### type/weblog

* `searchWeblog` - Search API for 'Weblog' entry type

### type/wikipage

* `searchWikipage` - Search API for 'Wiki Page' entry type

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
