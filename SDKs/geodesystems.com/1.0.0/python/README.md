# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MediaTabularExtractsheetRequest(
    query_params=operations.MediaTabularExtractsheetQueryParams(
        arg1="quae",
        entryid="rerum",
        output="vero",
    ),
)
    
res = s.service_media_tabular_extractsheet.media_tabular_extractsheet(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### service/media_tabular_extractsheet

* `media_tabular_extractsheet` - API for Extract sheets

### type/2017_boulder_election_expenditures

* `search_2017_boulder_election_expenditures` - Search API for '2017 Boulder Election Expenditures' entry type

### type/any

* `search_any` - Search API for 'Any file type' entry type

### type/beforeafter

* `search_beforeafter` - Search API for 'Before and After Images' entry type

### type/biblio

* `search_biblio` - Search API for 'Bibliographic Entry' entry type

### type/bio_dicom

* `search_bio_dicom` - Search API for 'DICOM File' entry type

### type/bio_dicom_test

* `search_bio_dicom_test` - Search API for 'DICOM Test File' entry type

### type/bio_fasta

* `search_bio_fasta` - Search API for 'FASTA File' entry type

### type/bio_fastq

* `search_bio_fastq` - Search API for 'FASTQ File' entry type

### type/bio_hmmer_index

* `search_bio_hmmer_index` - Search API for 'HMMER Index File' entry type

### type/bio_ome_tiff

* `search_bio_ome_tiff` - Search API for 'OME TIFF File' entry type

### type/bio_ontology_assay

* `search_bio_ontology_assay` - Search API for 'Assay' entry type

### type/bio_ontology_cohort

* `search_bio_ontology_cohort` - Search API for 'Cohort' entry type

### type/bio_ontology_person

* `search_bio_ontology_person` - Search API for 'Person' entry type

### type/bio_ontology_sample

* `search_bio_ontology_sample` - Search API for 'Sample' entry type

### type/bio_ontology_series

* `search_bio_ontology_series` - Search API for 'Series' entry type

### type/bio_ontology_study

* `search_bio_ontology_study` - Search API for 'Study' entry type

### type/bio_sam

* `search_bio_sam` - Search API for 'SAM Data' entry type

### type/bio_sf_pdb

* `search_bio_sf_pdb` - Search API for 'PDB Protein File' entry type

### type/bio_sra

* `search_bio_sra` - Search API for 'Sequence Read Archive' entry type

### type/bio_stockholm

* `search_bio_stockholm` - Search API for 'Stockholm File' entry type

### type/bio_taxonomy

* `search_bio_taxonomy` - Search API for 'Taxonomic Entry' entry type

### type/blogentry

* `search_blogentry` - Search API for 'Weblog Entry' entry type

### type/bolder_rental_housing

* `search_bolder_rental_housing` - Search API for 'Boulder Rental Housing' entry type

### type/bookmarks

* `search_bookmarks` - Search API for 'Bookmarks' entry type

### type/boston_crime

* `search_boston_crime` - Search API for 'Boston Crime' entry type

### type/boulder_2017_election_contributions

* `search_boulder_2017_election_contributions` - Search API for 'Boulder 2017 Election Contributions' entry type

### type/boulder_campaign_contributions

* `search_boulder_campaign_contributions` - Search API for 'Boulder Campaign Contributions' entry type

### type/boulder_consulting_services

* `search_boulder_consulting_services` - Search API for 'Boulder Consulting Services Database' entry type

### type/boulder_county_voter_details

* `search_boulder_county_voter_details` - Search API for 'Boulder County Voter Details' entry type

### type/boulder_crimes

* `search_boulder_crimes` - Search API for 'Boulder Crime Reports' entry type

### type/boulder_emails

* `search_boulder_emails` - Search API for 'Boulder Council Emails' entry type

### type/boulder_employee_salaries

* `search_boulder_employee_salaries` - Search API for 'Boulder Employee Salaries' entry type

### type/calendar

* `search_calendar` - Search API for 'Calendar' entry type

### type/campaign_donors

* `search_campaign_donors` - Search API for 'Campaign Donors' entry type

### type/campaign_expenditures

* `search_campaign_expenditures` - Search API for 'Campaign Expenditures' entry type

### type/cataloglink

* `search_cataloglink` - Search API for 'Catalog Link' entry type

### type/cdm_grid

* `search_cdm_grid` - Search API for 'Gridded Data File' entry type

### type/chatroom

* `search_chatroom` - Search API for 'Chat Room' entry type

### type/colorado_water_rights

* `search_colorado_water_rights` - Search API for 'Colorado Water Rights' entry type

### type/committee_donations

* `search_committee_donations` - Search API for 'Committee Donations' entry type

### type/community_datahub

* `search_community_datahub` - Search API for 'Data Hub' entry type

### type/community_resource

* `search_community_resource` - Search API for 'Facility' entry type

### type/construction_permits

* `search_construction_permits` - Search API for 'Construction Permits' entry type

### type/contact

* `search_contact` - Search API for 'Contact List' entry type

### type/db_co_indicators

* `search_db_co_indicators` - Search API for 'Colorado Health Indicators' entry type

### type/earth_satellite_landsat

* `search_earth_satellite_landsat` - Search API for 'Landsat Satellite Data' entry type

### type/faq

* `search_faq` - Search API for 'FAQ' entry type

### type/fec_pacs

* `search_fec_pacs` - Search API for 'FEC PACs' entry type

### type/feccandidates

* `search_feccandidates` - Search API for 'Candidates' entry type

### type/feed

* `search_feed` - Search API for 'RSS/ATOM Feed' entry type

### type/file

* `search_file` - Search API for 'File' entry type

### type/fits_data

* `search_fits_data` - Search API for 'FITS Data File' entry type

### type/ftp

* `search_ftp` - Search API for 'Remote FTP File View' entry type

### type/gadgets_countdown

* `search_gadgets_countdown` - Search API for 'Countdown' entry type

### type/gadgets_stock

* `search_gadgets_stock` - Search API for 'Stock Ticker' entry type

### type/gadgets_weather

* `search_gadgets_weather` - Search API for 'Weather' entry type

### type/gazeteer_census_tracts

* `search_gazeteer_census_tracts` - Search API for 'Census Tracts' entry type

### type/gazeteer_counties

* `search_gazeteer_counties` - Search API for 'Census Gazeteer Counties' entry type

### type/geo_ge

* `search_geo_geojson` - Search API for 'GeoJson File' entry type

### type/geo_geotiff

* `search_geo_geotiff` - Search API for 'GeoTIFF' entry type

### type/geo_gpx

* `search_geo_gpx` - Search API for 'GPX GPS File' entry type

### type/geo_hdf5

* `search_geo_hdf5` - Search API for 'HDF5 File' entry type

### type/geo_kml

* `search_geo_kml` - Search API for 'KML/KMZ File' entry type

### type/geo_shapefile

* `search_geo_shapefile` - Search API for 'Shapefile' entry type

### type/geo_shapefile_fips

* `search_geo_shapefile_fips` - Search API for 'Shapefile with FIPS Code' entry type

### type/glossary

* `search_glossary` - Search API for 'Glossary' entry type

### type/gridaggregation

* `search_gridaggregation` - Search API for 'Grid Aggregation' entry type

### type/group

* `search_group` - Search API for 'Folder' entry type

### type/hipchat_group

* `search_hipchat_group` - Search API for 'HipChat Group' entry type

### type/homepage

* `search_homepage` - Search API for 'Home Page' entry type

### type/incident

* `search_incident` - Search API for 'Incident' entry type

### type/jeopardy

* `search_jeopardy` - Search API for 'Jeopardy' entry type

### type/latlonimage

* `search_latlonimage` - Search API for 'Lat-Lon Image' entry type

### type/lidar_collection

* `search_lidar_collection` - Search API for 'LiDAR Collection' entry type

### type/lidar_las

* `search_lidar_las` - Search API for 'LAS Lidar Data' entry type

### type/lidar_lvis

* `search_lidar_lvis` - Search API for 'LVIS Lidar Data' entry type

### type/link

* `search_link` - Search API for 'Link' entry type

### type/localfiles

* `search_localfiles` - Search API for 'Server Side Files' entry type

### type/locations

* `search_locations` - Search API for 'Locations' entry type

### type/map_googlemap

* `search_map_googlemap` - Search API for 'Google Map URL' entry type

### type/media_audiofile

* `search_media_audiofile` - Search API for 'Audio File' entry type

### type/media_imageloop

* `search_media_imageloop` - Search API for 'Image Loop' entry type

### type/media_photoalbum

* `search_media_photoalbum` - Search API for 'Photo Album' entry type

### type/media_video_channel

* `search_media_video_channel` - Search API for 'Video Channel' entry type

### type/media_video_quicktime

* `search_media_video_quicktime` - Search API for 'Quicktime Video' entry type

### type/media_youtubevideo

* `search_media_youtubevideo` - Search API for 'YouTube Video' entry type

### type/notes

* `search_notes` - Search API for 'Notes' entry type

### type/notes_jsonfile

* `search_notes_jsonfile` - Search API for 'Json File' entry type

### type/notes_note

* `search_notes_note` - Search API for 'Note' entry type

### type/notes_notebook

* `search_notes_notebook` - Search API for 'Notebook' entry type

### type/nwsfeed

* `search_nwsfeed` - Search API for 'NWS Forecast Feed' entry type

### type/opendaplink

* `search_opendaplink` - Search API for 'OPeNDAP Link' entry type

### type/owl.class

* `search_owl_class` - Search API for 'OWL Class' entry type

### type/owl.ontology

* `search_owl_ontology` - Search API for 'OWL Ontology' entry type

### type/pasteitentry

* `search_pasteitentry` - Search API for 'Paste Text Entry' entry type

### type/point_text

* `search_point_text` - Search API for 'Text Point Data' entry type

### type/police_stop_data

* `search_police_stop_data` - Search API for 'Police Stop Data' entry type

### type/poll

* `search_poll` - Search API for 'Poll' entry type

### type/project_campaign

* `search_project_campaign` - Search API for 'Campaign' entry type

### type/project_casestudy

* `search_project_casestudy` - Search API for 'Case Study' entry type

### type/project_contribution

* `search_project_contribution` - Search API for 'Research Contribution' entry type

### type/project_dataformat

* `search_project_dataformat` - Search API for 'Data Format' entry type

### type/project_dataset

* `search_project_dataset` - Search API for 'Dataset' entry type

### type/project_deployment

* `search_project_deployment` - Search API for 'Deployment' entry type

### type/project_experiment

* `search_project_experiment` - Search API for 'Experiment' entry type

### type/project_fieldnote

* `search_project_fieldnote` - Search API for 'Field Note' entry type

### type/project_gps_controlpoints

* `search_project_gps_controlpoints` - Search API for 'Control Points File' entry type

### type/project_gps_raw

* `search_project_gps_raw` - Search API for 'Raw GPS File' entry type

### type/project_gps_rinex

* `search_project_gps_rinex` - Search API for 'RINEX File' entry type

### type/project_instrument

* `search_project_instrument` - Search API for 'Instrument Data Collection' entry type

### type/project_learning_resource

* `search_project_learning_resource` - Search API for 'Teaching Resource' entry type

### type/project_meeting

* `search_project_meeting` - Search API for 'Meeting' entry type

### type/project_organization

* `search_project_organization` - Search API for 'Organization' entry type

### type/project_program

* `search_project_program` - Search API for 'Program' entry type

### type/project_project

* `search_project_project` - Search API for 'Project' entry type

### type/project_service

* `search_project_service` - Search API for 'Data Access Service' entry type

### type/project_site

* `search_project_site` - Search API for 'Site' entry type

### type/project_softwarepackage

* `search_project_softwarepackage` - Search API for 'Software Tool' entry type

### type/project_standard_name

* `search_project_standard_name` - Search API for 'Standard Parameter Name' entry type

### type/project_surveylocation

* `search_project_surveylocation` - Search API for 'Survey Location' entry type

### type/project_term

* `search_project_term` - Search API for 'Vocabulary Term' entry type

### type/project_visit

* `search_project_visit` - Search API for 'Site Visit' entry type

### type/project_vocabulary

* `search_project_vocabulary` - Search API for 'Vocabulary' entry type

### type/property_sales

* `search_property_sales` - Search API for 'Property Sales' entry type

### type/propertydb

* `search_propertydb` - Search API for 'Property Database' entry type

### type/python_notebook

* `search_python_notebook` - Search API for 'IPython Notebook file' entry type

### type/slack_team

* `search_slack_team` - Search API for 'Slack Team' entry type

### type/statusboard

* `search_statusboard` - Search API for 'Status Board' entry type

### type/sunrisesunset

* `search_sunrisesunset` - Search API for 'Sunrise/Sunset Display' entry type

### type/tasks

* `search_tasks` - Search API for 'Tasks' entry type

### type/tmdbmovies

* `search_tmdbmovies` - Search API for 'Tmdb Movies' entry type

### type/todo

* `search_todo` - Search API for 'Todo' entry type

### type/trip_event

* `search_trip_event` - Search API for 'Event' entry type

### type/trip_flight

* `search_trip_flight` - Search API for 'Flight Leg' entry type

### type/trip_hotel

* `search_trip_hotel` - Search API for 'Lodging' entry type

### type/trip_report

* `search_trip_report` - Search API for 'Trip Report' entry type

### type/trip_trip

* `search_trip_trip` - Search API for 'Trip' entry type

### type/type_awc_metar

* `search_type_awc_metar` - Search API for 'AWC Weather Observations' entry type

### type/type_biz_stockseries

* `search_type_biz_stockseries` - Search API for 'Stock Ticker Data' entry type

### type/type_bls_series

* `search_type_bls_series` - Search API for 'BLS Series' entry type

### type/type_bls_survey

* `search_type_bls_survey` - Search API for 'BLS Survey' entry type

### type/type_census_acs

* `search_type_census_acs` - Search API for 'US Census ACS Data' entry type

### type/type_daymet

* `search_type_daymet` - Search API for 'Daymet Daily Weather' entry type

### type/type_db_table

* `search_type_db_table` - Search API for 'Database Table' entry type

### type/type_document_csv

* `search_type_document_csv` - Search API for 'CSV File' entry type

### type/type_document_doc

* `search_type_document_doc` - Search API for 'Word File' entry type

### type/type_document_html

* `search_type_document_html` - Search API for 'HTML File' entry type

### type/type_document_pdf

* `search_type_document_pdf` - Search API for 'PDF File' entry type

### type/type_document_ppt

* `search_type_document_ppt` - Search API for 'Powerpoint File' entry type

### type/type_document_xls

* `search_type_document_xls` - Search API for 'Excel File' entry type

### type/type_drilsdown_casestudy

* `search_type_drilsdown_casestudy` - Search API for 'Drilsdown Case Study' entry type

### type/type_edgar_filing

* `search_type_edgar_filing` - Search API for 'SEC EDGAR Filing' entry type

### type/type_eia_category

* `search_type_eia_category` - Search API for 'EIA Category' entry type

### type/type_eia_series

* `search_type_eia_series` - Search API for 'EIA Series' entry type

### type/type_esri_featureserver

* `search_type_esri_featureserver` - Search API for 'ESRI Feature Server' entry type

### type/type_esri_geometryserver

* `search_type_esri_geometryserver` - Search API for 'ESRI Geometry Server' entry type

### type/type_esri_gpserver

* `search_type_esri_gpserver` - Search API for 'ESRI GP Server' entry type

### type/type_esri_imageserver

* `search_type_esri_imageserver` - Search API for 'ESRI Image Server' entry type

### type/type_esri_layer

* `search_type_esri_layer` - Search API for 'ESRI Layer' entry type

### type/type_esri_mapserver

* `search_type_esri_mapserver` - Search API for 'ESRI Map Server' entry type

### type/type_esri_restfolder

* `search_type_esri_restfolder` - Search API for 'ESRI Services Folder' entry type

### type/type_esri_restserver

* `search_type_esri_restserver` - Search API for 'ESRI Web Server' entry type

### type/type_esri_restservice

* `search_type_esri_restservice` - Search API for 'ESRI Rest Service' entry type

### type/type_extremes

* `search_type_extremes` - Search API for 'NOAA Extremes Data' entry type

### type/type_fred_category

* `search_type_fred_category` - Search API for 'FRED Category' entry type

### type/type_fred_series

* `search_type_fred_series` - Search API for 'FRED Series' entry type

### type/type_gtfs_agency

* `search_type_gtfs_agency` - Search API for 'Transit Agency' entry type

### type/type_gtfs_route

* `search_type_gtfs_route` - Search API for 'Transit Route' entry type

### type/type_gtfs_routes

* `search_type_gtfs_routes` - Search API for 'Transit Route Collection' entry type

### type/type_gtfs_stop

* `search_type_gtfs_stop` - Search API for 'Transit Stop' entry type

### type/type_gtfs_stops

* `search_type_gtfs_stops` - Search API for 'Transit Stop Collection' entry type

### type/type_gtfs_trip

* `search_type_gtfs_trip` - Search API for 'Transit Trip' entry type

### type/type_hazarddata

* `search_type_hazarddata` - Search API for 'Hazard Data' entry type

### type/type_hydro_colorado

* `search_type_hydro_colorado` - Search API for 'Colorado DNR Stream Gage' entry type

### type/type_idv_bundle

* `search_type_idv_bundle` - Search API for 'IDV Bundle' entry type

### type/type_image

* `search_type_image` - Search API for 'Image' entry type

### type/type_image_airport

* `search_type_image_airport` - Search API for 'Airport Image' entry type

### type/type_image_webcam

* `search_type_image_webcam` - Search API for 'Webcam' entry type

### type/type_mb

* `search_type_mb` - Search API for 'MB Bathymetry' entry type

### type/type_mb_collection

* `search_type_mb_collection` - Search API for 'Bathymetry Collection' entry type

### type/type_mb_point_basic

* `search_type_mb_point_basic` - Search API for 'Basic MB point file' entry type

### type/type_metameta_dictionary

* `search_type_metameta_dictionary` - Search API for 'Metadata Dictionary' entry type

### type/type_metameta_field

* `search_type_metameta_field` - Search API for 'Metadata Field' entry type

### type/type_nasaames

* `search_type_nasaames` - Search API for 'NASA AMES File' entry type

### type/type_ncss

* `search_type_ncss` - Search API for 'NetCDF Point Subset' entry type

### type/type_nitf

* `search_type_nitf` - Search API for 'NITF File' entry type

### type/type_point_ameriflux_level2

* `search_type_point_ameriflux_level2` - Search API for 'Ameriflux Level 2 CSV File' entry type

### type/type_point_amrc_final

* `search_type_point_amrc_final` - Search API for 'AMRC Final QC Data' entry type

### type/type_point_amrc_freewave

* `search_type_point_amrc_freewave` - Search API for 'AMRC Freewave  Data' entry type

### type/type_point_czo

* `search_type_point_czo` - Search API for 'CZO Display File Format' entry type

### type/type_point_gcnet

* `search_type_point_gcnet` - Search API for 'GC-Net Point Data' entry type

### type/type_point_geomag_iaga2002

* `search_type_point_geomag_iaga2002` - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### type/type_point_hydro_waterml

* `search_type_point_hydro_waterml` - Search API for 'WaterML' entry type

### type/type_point_icebridge_atm_icessn

* `search_type_point_icebridge_atm_icessn` - Search API for 'ATM Ice SSN Data' entry type

### type/type_point_icebridge_atm_qfit

* `search_type_point_icebridge_atm_qfit` - Search API for 'ATM QFIT Data' entry type

### type/type_point_icebridge_mccords_irmcr2

* `search_type_point_icebridge_mccords_irmcr2` - Search API for 'McCords Irmcr2 Data' entry type

### type/type_point_icebridge_mccords_irmcr3

* `search_type_point_icebridge_mccords_irmcr3` - Search API for 'McCords Irmcr3 Data' entry type

### type/type_point_icebridge_paris

* `search_type_point_icebridge_paris` - Search API for 'Paris Data' entry type

### type/type_point_idv

* `search_type_point_idv` - Search API for 'IDV Point File' entry type

### type/type_point_inline

* `search_type_point_inline` - Search API for 'Inline Point File' entry type

### type/type_point_ncdc_climate

* `search_type_point_ncdc_climate` - Search API for 'NC  DC Climate Data' entry type

### type/type_point_netcdf

* `search_type_point_netcdf` - Search API for 'NetCDF Point File' entry type

### type/type_point_noaa_carbon

* `search_type_point_noaa_carbon` - Search API for 'NOAA Carbon Measurements' entry type

### type/type_point_noaa_flask_event

* `search_type_point_noaa_flask_event` - Search API for 'NOAA Flask Event Measurements' entry type

### type/type_point_noaa_flask_month

* `search_type_point_noaa_flask_month` - Search API for 'NOAA Flask Month Measurements' entry type

### type/type_point_noaa_madis

* `search_type_point_noaa_madis` - Search API for 'NOAA MADIS Point Data' entry type

### type/type_point_noaa_tower

* `search_type_point_noaa_tower` - Search API for 'NOAA Tower Network' entry type

### type/type_point_ocean_cnv

* `search_type_point_ocean_cnv` - Search API for 'SeaBird CNV Data' entry type

### type/type_point_ocean_csv_sado_TTS

* `search_type_point_ocean_csv_sado_tts` - Search API for 'SADO TTS Data' entry type

### type/type_point_ocean_csv_sado_meteo

* `search_type_point_ocean_csv_sado_meteo` - Search API for 'SADO Meteo Data' entry type

### type/type_point_ocean_csv_sado_position

* `search_type_point_ocean_csv_sado_position` - Search API for 'SADO Position Data' entry type

### type/type_point_ocean_netcdf_glider

* `search_type_point_ocean_netcdf_glider` - Search API for 'NetCDF Glider Data' entry type

### type/type_point_ocean_netcdf_track

* `search_type_point_ocean_netcdf_track` - Search API for 'NetCDF Track Data' entry type

### type/type_point_ocean_ooi_dmgx

* `search_type_point_ocean_ooi_dmgx` - Search API for 'OOI Data' entry type

### type/type_point_openaq

* `search_type_point_openaq` - Search API for 'Open AQ Air Quality' entry type

### type/type_point_pbo_position_time_series

* `search_type_point_pbo_position_time_series` - Search API for 'PBO Position Time Series' entry type

### type/type_point_simple_records

* `search_type_point_simple_records` - Search API for 'Simple Records' entry type

### type/type_point_snotel

* `search_type_point_snotel` - Search API for 'SNOTEL Snow Data' entry type

### type/type_point_text

* `search_type_point_text` - Search API for 'Record Text File' entry type

### type/type_point_wsbb_ggp

* `search_type_point_wsbb_ggp` - Search API for 'Global Geodynamics GGP Format' entry type

### type/type_psd_monthly_climate_index

* `search_type_psd_monthly_climate_index` - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### type/type_quandl_series

* `search_type_quandl_series` - Search API for 'QUANDL Series' entry type

### type/type_service_group

* `search_type_service_group` - Search API for 'Service Group' entry type

### type/type_service_link

* `search_type_service_link` - Search API for 'Service Link' entry type

### type/type_socrata_series

* `search_type_socrata_series` - Search API for 'SOCRATA Series' entry type

### type/type_sounding_cod

* `search_type_sounding_cod` - Search API for 'COD Sounding' entry type

### type/type_sounding_frd

* `search_type_sounding_frd` - Search API for 'FRD Sounding' entry type

### type/type_sounding_gsd

* `search_type_sounding_gsd` - Search API for 'GSD Sounding' entry type

### type/type_sounding_wyoming

* `search_type_sounding_wyoming` - Search API for 'UW Sounding' entry type

### type/type_tmy

* `search_type_tmy` - Search API for 'NREL TMY Data' entry type

### type/type_tweet

* `search_type_tweet` - Search API for 'Tweet' entry type

### type/type_usgs_gauge

* `search_type_usgs_gauge` - Search API for 'USGS Stream Gauge' entry type

### type/type_virtual

* `search_type_virtual` - Search API for 'Virtual Group' entry type

### type/type_wms_capabilities

* `search_type_wms_capabilities` - Search API for 'WMS Capabilities' entry type

### type/type_wms_layer

* `search_type_wms_layer` - Search API for 'WMS Layer' entry type

### type/ufo_sightings

* `search_ufo_sightings` - Search API for 'Ufo Sightings' entry type

### type/us_places

* `search_us_places` - Search API for 'US Places' entry type

### type/vote_yesno

* `search_vote_yesno` - Search API for 'Simple Yes-No Vote' entry type

### type/weblog

* `search_weblog` - Search API for 'Weblog' entry type

### type/wikipage

* `search_wikipage` - Search API for 'Wiki Page' entry type

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
