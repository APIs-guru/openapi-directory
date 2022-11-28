

import requests

from . import utils

from .service_media_tabular_extractsheet import ServiceMediaTabularExtractsheet
from .type_2017_boulder_election_expenditures import Type2017BoulderElectionExpenditures
from .type_any import TypeAny
from .type_beforeafter import TypeBeforeafter
from .type_biblio import TypeBiblio
from .type_bio_dicom import TypeBioDicom
from .type_bio_dicom_test import TypeBioDicomTest
from .type_bio_fasta import TypeBioFasta
from .type_bio_fastq import TypeBioFastq
from .type_bio_hmmer_index import TypeBioHmmerIndex
from .type_bio_ome_tiff import TypeBioOmeTiff
from .type_bio_ontology_assay import TypeBioOntologyAssay
from .type_bio_ontology_cohort import TypeBioOntologyCohort
from .type_bio_ontology_person import TypeBioOntologyPerson
from .type_bio_ontology_sample import TypeBioOntologySample
from .type_bio_ontology_series import TypeBioOntologySeries
from .type_bio_ontology_study import TypeBioOntologyStudy
from .type_bio_sam import TypeBioSam
from .type_bio_sf_pdb import TypeBioSfPdb
from .type_bio_sra import TypeBioSra
from .type_bio_stockholm import TypeBioStockholm
from .type_bio_taxonomy import TypeBioTaxonomy
from .type_blogentry import TypeBlogentry
from .type_bolder_rental_housing import TypeBolderRentalHousing
from .type_bookmarks import TypeBookmarks
from .type_boston_crime import TypeBostonCrime
from .type_boulder_2017_election_contributions import TypeBoulder2017ElectionContributions
from .type_boulder_campaign_contributions import TypeBoulderCampaignContributions
from .type_boulder_consulting_services import TypeBoulderConsultingServices
from .type_boulder_county_voter_details import TypeBoulderCountyVoterDetails
from .type_boulder_crimes import TypeBoulderCrimes
from .type_boulder_emails import TypeBoulderEmails
from .type_boulder_employee_salaries import TypeBoulderEmployeeSalaries
from .type_calendar import TypeCalendar
from .type_campaign_donors import TypeCampaignDonors
from .type_campaign_expenditures import TypeCampaignExpenditures
from .type_cataloglink import TypeCataloglink
from .type_cdm_grid import TypeCdmGrid
from .type_chatroom import TypeChatroom
from .type_colorado_water_rights import TypeColoradoWaterRights
from .type_committee_donations import TypeCommitteeDonations
from .type_community_datahub import TypeCommunityDatahub
from .type_community_resource import TypeCommunityResource
from .type_construction_permits import TypeConstructionPermits
from .type_contact import TypeContact
from .type_db_co_indicators import TypeDbCoIndicators
from .type_earth_satellite_landsat import TypeEarthSatelliteLandsat
from .type_faq import TypeFaq
from .type_fec_pacs import TypeFecPacs
from .type_feccandidates import TypeFeccandidates
from .type_feed import TypeFeed
from .type_file import TypeFile
from .type_fits_data import TypeFitsData
from .type_ftp import TypeFtp
from .type_gadgets_countdown import TypeGadgetsCountdown
from .type_gadgets_stock import TypeGadgetsStock
from .type_gadgets_weather import TypeGadgetsWeather
from .type_gazeteer_census_tracts import TypeGazeteerCensusTracts
from .type_gazeteer_counties import TypeGazeteerCounties
from .type_geo_ge import TypeGeoGe
from .type_geo_geotiff import TypeGeoGeotiff
from .type_geo_gpx import TypeGeoGpx
from .type_geo_hdf5 import TypeGeoHdf5
from .type_geo_kml import TypeGeoKml
from .type_geo_shapefile import TypeGeoShapefile
from .type_geo_shapefile_fips import TypeGeoShapefileFips
from .type_glossary import TypeGlossary
from .type_gridaggregation import TypeGridaggregation
from .type_group import TypeGroup
from .type_hipchat_group import TypeHipchatGroup
from .type_homepage import TypeHomepage
from .type_incident import TypeIncident
from .type_jeopardy import TypeJeopardy
from .type_latlonimage import TypeLatlonimage
from .type_lidar_collection import TypeLidarCollection
from .type_lidar_las import TypeLidarLas
from .type_lidar_lvis import TypeLidarLvis
from .type_link import TypeLink
from .type_localfiles import TypeLocalfiles
from .type_locations import TypeLocations
from .type_map_googlemap import TypeMapGooglemap
from .type_media_audiofile import TypeMediaAudiofile
from .type_media_imageloop import TypeMediaImageloop
from .type_media_photoalbum import TypeMediaPhotoalbum
from .type_media_video_channel import TypeMediaVideoChannel
from .type_media_video_quicktime import TypeMediaVideoQuicktime
from .type_media_youtubevideo import TypeMediaYoutubevideo
from .type_notes import TypeNotes
from .type_notes_jsonfile import TypeNotesJsonfile
from .type_notes_note import TypeNotesNote
from .type_notes_notebook import TypeNotesNotebook
from .type_nwsfeed import TypeNwsfeed
from .type_opendaplink import TypeOpendaplink
from .type_owl_class import TypeOwlClass
from .type_owl_ontology import TypeOwlOntology
from .type_pasteitentry import TypePasteitentry
from .type_point_text import TypePointText
from .type_police_stop_data import TypePoliceStopData
from .type_poll import TypePoll
from .type_project_campaign import TypeProjectCampaign
from .type_project_casestudy import TypeProjectCasestudy
from .type_project_contribution import TypeProjectContribution
from .type_project_dataformat import TypeProjectDataformat
from .type_project_dataset import TypeProjectDataset
from .type_project_deployment import TypeProjectDeployment
from .type_project_experiment import TypeProjectExperiment
from .type_project_fieldnote import TypeProjectFieldnote
from .type_project_gps_controlpoints import TypeProjectGpsControlpoints
from .type_project_gps_raw import TypeProjectGpsRaw
from .type_project_gps_rinex import TypeProjectGpsRinex
from .type_project_instrument import TypeProjectInstrument
from .type_project_learning_resource import TypeProjectLearningResource
from .type_project_meeting import TypeProjectMeeting
from .type_project_organization import TypeProjectOrganization
from .type_project_program import TypeProjectProgram
from .type_project_project import TypeProjectProject
from .type_project_service import TypeProjectService
from .type_project_site import TypeProjectSite
from .type_project_softwarepackage import TypeProjectSoftwarepackage
from .type_project_standard_name import TypeProjectStandardName
from .type_project_surveylocation import TypeProjectSurveylocation
from .type_project_term import TypeProjectTerm
from .type_project_visit import TypeProjectVisit
from .type_project_vocabulary import TypeProjectVocabulary
from .type_property_sales import TypePropertySales
from .type_propertydb import TypePropertydb
from .type_python_notebook import TypePythonNotebook
from .type_slack_team import TypeSlackTeam
from .type_statusboard import TypeStatusboard
from .type_sunrisesunset import TypeSunrisesunset
from .type_tasks import TypeTasks
from .type_tmdbmovies import TypeTmdbmovies
from .type_todo import TypeTodo
from .type_trip_event import TypeTripEvent
from .type_trip_flight import TypeTripFlight
from .type_trip_hotel import TypeTripHotel
from .type_trip_report import TypeTripReport
from .type_trip_trip import TypeTripTrip
from .type_type_awc_metar import TypeTypeAwcMetar
from .type_type_biz_stockseries import TypeTypeBizStockseries
from .type_type_bls_series import TypeTypeBlsSeries
from .type_type_bls_survey import TypeTypeBlsSurvey
from .type_type_census_acs import TypeTypeCensusAcs
from .type_type_daymet import TypeTypeDaymet
from .type_type_db_table import TypeTypeDbTable
from .type_type_document_csv import TypeTypeDocumentCsv
from .type_type_document_doc import TypeTypeDocumentDoc
from .type_type_document_html import TypeTypeDocumentHTML
from .type_type_document_pdf import TypeTypeDocumentPdf
from .type_type_document_ppt import TypeTypeDocumentPpt
from .type_type_document_xls import TypeTypeDocumentXls
from .type_type_drilsdown_casestudy import TypeTypeDrilsdownCasestudy
from .type_type_edgar_filing import TypeTypeEdgarFiling
from .type_type_eia_category import TypeTypeEiaCategory
from .type_type_eia_series import TypeTypeEiaSeries
from .type_type_esri_featureserver import TypeTypeEsriFeatureserver
from .type_type_esri_geometryserver import TypeTypeEsriGeometryserver
from .type_type_esri_gpserver import TypeTypeEsriGpserver
from .type_type_esri_imageserver import TypeTypeEsriImageserver
from .type_type_esri_layer import TypeTypeEsriLayer
from .type_type_esri_mapserver import TypeTypeEsriMapserver
from .type_type_esri_restfolder import TypeTypeEsriRestfolder
from .type_type_esri_restserver import TypeTypeEsriRestserver
from .type_type_esri_restservice import TypeTypeEsriRestservice
from .type_type_extremes import TypeTypeExtremes
from .type_type_fred_category import TypeTypeFredCategory
from .type_type_fred_series import TypeTypeFredSeries
from .type_type_gtfs_agency import TypeTypeGtfsAgency
from .type_type_gtfs_route import TypeTypeGtfsRoute
from .type_type_gtfs_routes import TypeTypeGtfsRoutes
from .type_type_gtfs_stop import TypeTypeGtfsStop
from .type_type_gtfs_stops import TypeTypeGtfsStops
from .type_type_gtfs_trip import TypeTypeGtfsTrip
from .type_type_hazarddata import TypeTypeHazarddata
from .type_type_hydro_colorado import TypeTypeHydroColorado
from .type_type_idv_bundle import TypeTypeIdvBundle
from .type_type_image import TypeTypeImage
from .type_type_image_airport import TypeTypeImageAirport
from .type_type_image_webcam import TypeTypeImageWebcam
from .type_type_mb import TypeTypeMb
from .type_type_mb_collection import TypeTypeMbCollection
from .type_type_mb_point_basic import TypeTypeMbPointBasic
from .type_type_metameta_dictionary import TypeTypeMetametaDictionary
from .type_type_metameta_field import TypeTypeMetametaField
from .type_type_nasaames import TypeTypeNasaames
from .type_type_ncss import TypeTypeNcss
from .type_type_nitf import TypeTypeNitf
from .type_type_point_ameriflux_level2 import TypeTypePointAmerifluxLevel2
from .type_type_point_amrc_final import TypeTypePointAmrcFinal
from .type_type_point_amrc_freewave import TypeTypePointAmrcFreewave
from .type_type_point_czo import TypeTypePointCzo
from .type_type_point_gcnet import TypeTypePointGcnet
from .type_type_point_geomag_iaga2002 import TypeTypePointGeomagIaga2002
from .type_type_point_hydro_waterml import TypeTypePointHydroWaterml
from .type_type_point_icebridge_atm_icessn import TypeTypePointIcebridgeAtmIcessn
from .type_type_point_icebridge_atm_qfit import TypeTypePointIcebridgeAtmQfit
from .type_type_point_icebridge_mccords_irmcr2 import TypeTypePointIcebridgeMccordsIrmcr2
from .type_type_point_icebridge_mccords_irmcr3 import TypeTypePointIcebridgeMccordsIrmcr3
from .type_type_point_icebridge_paris import TypeTypePointIcebridgeParis
from .type_type_point_idv import TypeTypePointIdv
from .type_type_point_inline import TypeTypePointInline
from .type_type_point_ncdc_climate import TypeTypePointNcdcClimate
from .type_type_point_netcdf import TypeTypePointNetcdf
from .type_type_point_noaa_carbon import TypeTypePointNoaaCarbon
from .type_type_point_noaa_flask_event import TypeTypePointNoaaFlaskEvent
from .type_type_point_noaa_flask_month import TypeTypePointNoaaFlaskMonth
from .type_type_point_noaa_madis import TypeTypePointNoaaMadis
from .type_type_point_noaa_tower import TypeTypePointNoaaTower
from .type_type_point_ocean_cnv import TypeTypePointOceanCnv
from .type_type_point_ocean_csv_sado_tts import TypeTypePointOceanCsvSadoTts
from .type_type_point_ocean_csv_sado_meteo import TypeTypePointOceanCsvSadoMeteo
from .type_type_point_ocean_csv_sado_position import TypeTypePointOceanCsvSadoPosition
from .type_type_point_ocean_netcdf_glider import TypeTypePointOceanNetcdfGlider
from .type_type_point_ocean_netcdf_track import TypeTypePointOceanNetcdfTrack
from .type_type_point_ocean_ooi_dmgx import TypeTypePointOceanOoiDmgx
from .type_type_point_openaq import TypeTypePointOpenaq
from .type_type_point_pbo_position_time_series import TypeTypePointPboPositionTimeSeries
from .type_type_point_simple_records import TypeTypePointSimpleRecords
from .type_type_point_snotel import TypeTypePointSnotel
from .type_type_point_text import TypeTypePointText
from .type_type_point_wsbb_ggp import TypeTypePointWsbbGgp
from .type_type_psd_monthly_climate_index import TypeTypePsdMonthlyClimateIndex
from .type_type_quandl_series import TypeTypeQuandlSeries
from .type_type_service_group import TypeTypeServiceGroup
from .type_type_service_link import TypeTypeServiceLink
from .type_type_socrata_series import TypeTypeSocrataSeries
from .type_type_sounding_cod import TypeTypeSoundingCod
from .type_type_sounding_frd import TypeTypeSoundingFrd
from .type_type_sounding_gsd import TypeTypeSoundingGsd
from .type_type_sounding_wyoming import TypeTypeSoundingWyoming
from .type_type_tmy import TypeTypeTmy
from .type_type_tweet import TypeTypeTweet
from .type_type_usgs_gauge import TypeTypeUsgsGauge
from .type_type_virtual import TypeTypeVirtual
from .type_type_wms_capabilities import TypeTypeWmsCapabilities
from .type_type_wms_layer import TypeTypeWmsLayer
from .type_ufo_sightings import TypeUfoSightings
from .type_us_places import TypeUsPlaces
from .type_vote_yesno import TypeVoteYesno
from .type_weblog import TypeWeblog
from .type_wikipage import TypeWikipage


SERVERS = [
	"https://geodesystems.com:443/",
]


class SDK:
    
    service_media_tabular_extractsheet: ServiceMediaTabularExtractsheet
    type_2017_boulder_election_expenditures: Type2017BoulderElectionExpenditures
    type_any: TypeAny
    type_beforeafter: TypeBeforeafter
    type_biblio: TypeBiblio
    type_bio_dicom: TypeBioDicom
    type_bio_dicom_test: TypeBioDicomTest
    type_bio_fasta: TypeBioFasta
    type_bio_fastq: TypeBioFastq
    type_bio_hmmer_index: TypeBioHmmerIndex
    type_bio_ome_tiff: TypeBioOmeTiff
    type_bio_ontology_assay: TypeBioOntologyAssay
    type_bio_ontology_cohort: TypeBioOntologyCohort
    type_bio_ontology_person: TypeBioOntologyPerson
    type_bio_ontology_sample: TypeBioOntologySample
    type_bio_ontology_series: TypeBioOntologySeries
    type_bio_ontology_study: TypeBioOntologyStudy
    type_bio_sam: TypeBioSam
    type_bio_sf_pdb: TypeBioSfPdb
    type_bio_sra: TypeBioSra
    type_bio_stockholm: TypeBioStockholm
    type_bio_taxonomy: TypeBioTaxonomy
    type_blogentry: TypeBlogentry
    type_bolder_rental_housing: TypeBolderRentalHousing
    type_bookmarks: TypeBookmarks
    type_boston_crime: TypeBostonCrime
    type_boulder_2017_election_contributions: TypeBoulder2017ElectionContributions
    type_boulder_campaign_contributions: TypeBoulderCampaignContributions
    type_boulder_consulting_services: TypeBoulderConsultingServices
    type_boulder_county_voter_details: TypeBoulderCountyVoterDetails
    type_boulder_crimes: TypeBoulderCrimes
    type_boulder_emails: TypeBoulderEmails
    type_boulder_employee_salaries: TypeBoulderEmployeeSalaries
    type_calendar: TypeCalendar
    type_campaign_donors: TypeCampaignDonors
    type_campaign_expenditures: TypeCampaignExpenditures
    type_cataloglink: TypeCataloglink
    type_cdm_grid: TypeCdmGrid
    type_chatroom: TypeChatroom
    type_colorado_water_rights: TypeColoradoWaterRights
    type_committee_donations: TypeCommitteeDonations
    type_community_datahub: TypeCommunityDatahub
    type_community_resource: TypeCommunityResource
    type_construction_permits: TypeConstructionPermits
    type_contact: TypeContact
    type_db_co_indicators: TypeDbCoIndicators
    type_earth_satellite_landsat: TypeEarthSatelliteLandsat
    type_faq: TypeFaq
    type_fec_pacs: TypeFecPacs
    type_feccandidates: TypeFeccandidates
    type_feed: TypeFeed
    type_file: TypeFile
    type_fits_data: TypeFitsData
    type_ftp: TypeFtp
    type_gadgets_countdown: TypeGadgetsCountdown
    type_gadgets_stock: TypeGadgetsStock
    type_gadgets_weather: TypeGadgetsWeather
    type_gazeteer_census_tracts: TypeGazeteerCensusTracts
    type_gazeteer_counties: TypeGazeteerCounties
    type_geo_ge: TypeGeoGe
    type_geo_geotiff: TypeGeoGeotiff
    type_geo_gpx: TypeGeoGpx
    type_geo_hdf5: TypeGeoHdf5
    type_geo_kml: TypeGeoKml
    type_geo_shapefile: TypeGeoShapefile
    type_geo_shapefile_fips: TypeGeoShapefileFips
    type_glossary: TypeGlossary
    type_gridaggregation: TypeGridaggregation
    type_group: TypeGroup
    type_hipchat_group: TypeHipchatGroup
    type_homepage: TypeHomepage
    type_incident: TypeIncident
    type_jeopardy: TypeJeopardy
    type_latlonimage: TypeLatlonimage
    type_lidar_collection: TypeLidarCollection
    type_lidar_las: TypeLidarLas
    type_lidar_lvis: TypeLidarLvis
    type_link: TypeLink
    type_localfiles: TypeLocalfiles
    type_locations: TypeLocations
    type_map_googlemap: TypeMapGooglemap
    type_media_audiofile: TypeMediaAudiofile
    type_media_imageloop: TypeMediaImageloop
    type_media_photoalbum: TypeMediaPhotoalbum
    type_media_video_channel: TypeMediaVideoChannel
    type_media_video_quicktime: TypeMediaVideoQuicktime
    type_media_youtubevideo: TypeMediaYoutubevideo
    type_notes: TypeNotes
    type_notes_jsonfile: TypeNotesJsonfile
    type_notes_note: TypeNotesNote
    type_notes_notebook: TypeNotesNotebook
    type_nwsfeed: TypeNwsfeed
    type_opendaplink: TypeOpendaplink
    type_owl_class: TypeOwlClass
    type_owl_ontology: TypeOwlOntology
    type_pasteitentry: TypePasteitentry
    type_point_text: TypePointText
    type_police_stop_data: TypePoliceStopData
    type_poll: TypePoll
    type_project_campaign: TypeProjectCampaign
    type_project_casestudy: TypeProjectCasestudy
    type_project_contribution: TypeProjectContribution
    type_project_dataformat: TypeProjectDataformat
    type_project_dataset: TypeProjectDataset
    type_project_deployment: TypeProjectDeployment
    type_project_experiment: TypeProjectExperiment
    type_project_fieldnote: TypeProjectFieldnote
    type_project_gps_controlpoints: TypeProjectGpsControlpoints
    type_project_gps_raw: TypeProjectGpsRaw
    type_project_gps_rinex: TypeProjectGpsRinex
    type_project_instrument: TypeProjectInstrument
    type_project_learning_resource: TypeProjectLearningResource
    type_project_meeting: TypeProjectMeeting
    type_project_organization: TypeProjectOrganization
    type_project_program: TypeProjectProgram
    type_project_project: TypeProjectProject
    type_project_service: TypeProjectService
    type_project_site: TypeProjectSite
    type_project_softwarepackage: TypeProjectSoftwarepackage
    type_project_standard_name: TypeProjectStandardName
    type_project_surveylocation: TypeProjectSurveylocation
    type_project_term: TypeProjectTerm
    type_project_visit: TypeProjectVisit
    type_project_vocabulary: TypeProjectVocabulary
    type_property_sales: TypePropertySales
    type_propertydb: TypePropertydb
    type_python_notebook: TypePythonNotebook
    type_slack_team: TypeSlackTeam
    type_statusboard: TypeStatusboard
    type_sunrisesunset: TypeSunrisesunset
    type_tasks: TypeTasks
    type_tmdbmovies: TypeTmdbmovies
    type_todo: TypeTodo
    type_trip_event: TypeTripEvent
    type_trip_flight: TypeTripFlight
    type_trip_hotel: TypeTripHotel
    type_trip_report: TypeTripReport
    type_trip_trip: TypeTripTrip
    type_type_awc_metar: TypeTypeAwcMetar
    type_type_biz_stockseries: TypeTypeBizStockseries
    type_type_bls_series: TypeTypeBlsSeries
    type_type_bls_survey: TypeTypeBlsSurvey
    type_type_census_acs: TypeTypeCensusAcs
    type_type_daymet: TypeTypeDaymet
    type_type_db_table: TypeTypeDbTable
    type_type_document_csv: TypeTypeDocumentCsv
    type_type_document_doc: TypeTypeDocumentDoc
    type_type_document_html: TypeTypeDocumentHTML
    type_type_document_pdf: TypeTypeDocumentPdf
    type_type_document_ppt: TypeTypeDocumentPpt
    type_type_document_xls: TypeTypeDocumentXls
    type_type_drilsdown_casestudy: TypeTypeDrilsdownCasestudy
    type_type_edgar_filing: TypeTypeEdgarFiling
    type_type_eia_category: TypeTypeEiaCategory
    type_type_eia_series: TypeTypeEiaSeries
    type_type_esri_featureserver: TypeTypeEsriFeatureserver
    type_type_esri_geometryserver: TypeTypeEsriGeometryserver
    type_type_esri_gpserver: TypeTypeEsriGpserver
    type_type_esri_imageserver: TypeTypeEsriImageserver
    type_type_esri_layer: TypeTypeEsriLayer
    type_type_esri_mapserver: TypeTypeEsriMapserver
    type_type_esri_restfolder: TypeTypeEsriRestfolder
    type_type_esri_restserver: TypeTypeEsriRestserver
    type_type_esri_restservice: TypeTypeEsriRestservice
    type_type_extremes: TypeTypeExtremes
    type_type_fred_category: TypeTypeFredCategory
    type_type_fred_series: TypeTypeFredSeries
    type_type_gtfs_agency: TypeTypeGtfsAgency
    type_type_gtfs_route: TypeTypeGtfsRoute
    type_type_gtfs_routes: TypeTypeGtfsRoutes
    type_type_gtfs_stop: TypeTypeGtfsStop
    type_type_gtfs_stops: TypeTypeGtfsStops
    type_type_gtfs_trip: TypeTypeGtfsTrip
    type_type_hazarddata: TypeTypeHazarddata
    type_type_hydro_colorado: TypeTypeHydroColorado
    type_type_idv_bundle: TypeTypeIdvBundle
    type_type_image: TypeTypeImage
    type_type_image_airport: TypeTypeImageAirport
    type_type_image_webcam: TypeTypeImageWebcam
    type_type_mb: TypeTypeMb
    type_type_mb_collection: TypeTypeMbCollection
    type_type_mb_point_basic: TypeTypeMbPointBasic
    type_type_metameta_dictionary: TypeTypeMetametaDictionary
    type_type_metameta_field: TypeTypeMetametaField
    type_type_nasaames: TypeTypeNasaames
    type_type_ncss: TypeTypeNcss
    type_type_nitf: TypeTypeNitf
    type_type_point_ameriflux_level2: TypeTypePointAmerifluxLevel2
    type_type_point_amrc_final: TypeTypePointAmrcFinal
    type_type_point_amrc_freewave: TypeTypePointAmrcFreewave
    type_type_point_czo: TypeTypePointCzo
    type_type_point_gcnet: TypeTypePointGcnet
    type_type_point_geomag_iaga2002: TypeTypePointGeomagIaga2002
    type_type_point_hydro_waterml: TypeTypePointHydroWaterml
    type_type_point_icebridge_atm_icessn: TypeTypePointIcebridgeAtmIcessn
    type_type_point_icebridge_atm_qfit: TypeTypePointIcebridgeAtmQfit
    type_type_point_icebridge_mccords_irmcr2: TypeTypePointIcebridgeMccordsIrmcr2
    type_type_point_icebridge_mccords_irmcr3: TypeTypePointIcebridgeMccordsIrmcr3
    type_type_point_icebridge_paris: TypeTypePointIcebridgeParis
    type_type_point_idv: TypeTypePointIdv
    type_type_point_inline: TypeTypePointInline
    type_type_point_ncdc_climate: TypeTypePointNcdcClimate
    type_type_point_netcdf: TypeTypePointNetcdf
    type_type_point_noaa_carbon: TypeTypePointNoaaCarbon
    type_type_point_noaa_flask_event: TypeTypePointNoaaFlaskEvent
    type_type_point_noaa_flask_month: TypeTypePointNoaaFlaskMonth
    type_type_point_noaa_madis: TypeTypePointNoaaMadis
    type_type_point_noaa_tower: TypeTypePointNoaaTower
    type_type_point_ocean_cnv: TypeTypePointOceanCnv
    type_type_point_ocean_csv_sado_tts: TypeTypePointOceanCsvSadoTts
    type_type_point_ocean_csv_sado_meteo: TypeTypePointOceanCsvSadoMeteo
    type_type_point_ocean_csv_sado_position: TypeTypePointOceanCsvSadoPosition
    type_type_point_ocean_netcdf_glider: TypeTypePointOceanNetcdfGlider
    type_type_point_ocean_netcdf_track: TypeTypePointOceanNetcdfTrack
    type_type_point_ocean_ooi_dmgx: TypeTypePointOceanOoiDmgx
    type_type_point_openaq: TypeTypePointOpenaq
    type_type_point_pbo_position_time_series: TypeTypePointPboPositionTimeSeries
    type_type_point_simple_records: TypeTypePointSimpleRecords
    type_type_point_snotel: TypeTypePointSnotel
    type_type_point_text: TypeTypePointText
    type_type_point_wsbb_ggp: TypeTypePointWsbbGgp
    type_type_psd_monthly_climate_index: TypeTypePsdMonthlyClimateIndex
    type_type_quandl_series: TypeTypeQuandlSeries
    type_type_service_group: TypeTypeServiceGroup
    type_type_service_link: TypeTypeServiceLink
    type_type_socrata_series: TypeTypeSocrataSeries
    type_type_sounding_cod: TypeTypeSoundingCod
    type_type_sounding_frd: TypeTypeSoundingFrd
    type_type_sounding_gsd: TypeTypeSoundingGsd
    type_type_sounding_wyoming: TypeTypeSoundingWyoming
    type_type_tmy: TypeTypeTmy
    type_type_tweet: TypeTypeTweet
    type_type_usgs_gauge: TypeTypeUsgsGauge
    type_type_virtual: TypeTypeVirtual
    type_type_wms_capabilities: TypeTypeWmsCapabilities
    type_type_wms_layer: TypeTypeWmsLayer
    type_ufo_sightings: TypeUfoSightings
    type_us_places: TypeUsPlaces
    type_vote_yesno: TypeVoteYesno
    type_weblog: TypeWeblog
    type_wikipage: TypeWikipage

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.service_media_tabular_extractsheet = ServiceMediaTabularExtractsheet(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_2017_boulder_election_expenditures = Type2017BoulderElectionExpenditures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_any = TypeAny(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_beforeafter = TypeBeforeafter(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_biblio = TypeBiblio(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_dicom = TypeBioDicom(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_dicom_test = TypeBioDicomTest(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_fasta = TypeBioFasta(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_fastq = TypeBioFastq(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_hmmer_index = TypeBioHmmerIndex(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ome_tiff = TypeBioOmeTiff(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ontology_assay = TypeBioOntologyAssay(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ontology_cohort = TypeBioOntologyCohort(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ontology_person = TypeBioOntologyPerson(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ontology_sample = TypeBioOntologySample(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ontology_series = TypeBioOntologySeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_ontology_study = TypeBioOntologyStudy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_sam = TypeBioSam(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_sf_pdb = TypeBioSfPdb(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_sra = TypeBioSra(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_stockholm = TypeBioStockholm(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bio_taxonomy = TypeBioTaxonomy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_blogentry = TypeBlogentry(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bolder_rental_housing = TypeBolderRentalHousing(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_bookmarks = TypeBookmarks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boston_crime = TypeBostonCrime(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_2017_election_contributions = TypeBoulder2017ElectionContributions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_campaign_contributions = TypeBoulderCampaignContributions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_consulting_services = TypeBoulderConsultingServices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_county_voter_details = TypeBoulderCountyVoterDetails(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_crimes = TypeBoulderCrimes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_emails = TypeBoulderEmails(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_boulder_employee_salaries = TypeBoulderEmployeeSalaries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_calendar = TypeCalendar(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_campaign_donors = TypeCampaignDonors(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_campaign_expenditures = TypeCampaignExpenditures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_cataloglink = TypeCataloglink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_cdm_grid = TypeCdmGrid(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_chatroom = TypeChatroom(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_colorado_water_rights = TypeColoradoWaterRights(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_committee_donations = TypeCommitteeDonations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_community_datahub = TypeCommunityDatahub(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_community_resource = TypeCommunityResource(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_construction_permits = TypeConstructionPermits(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_contact = TypeContact(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_db_co_indicators = TypeDbCoIndicators(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_earth_satellite_landsat = TypeEarthSatelliteLandsat(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_faq = TypeFaq(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_fec_pacs = TypeFecPacs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_feccandidates = TypeFeccandidates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_feed = TypeFeed(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_file = TypeFile(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_fits_data = TypeFitsData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_ftp = TypeFtp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_gadgets_countdown = TypeGadgetsCountdown(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_gadgets_stock = TypeGadgetsStock(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_gadgets_weather = TypeGadgetsWeather(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_gazeteer_census_tracts = TypeGazeteerCensusTracts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_gazeteer_counties = TypeGazeteerCounties(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_ge = TypeGeoGe(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_geotiff = TypeGeoGeotiff(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_gpx = TypeGeoGpx(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_hdf5 = TypeGeoHdf5(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_kml = TypeGeoKml(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_shapefile = TypeGeoShapefile(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_geo_shapefile_fips = TypeGeoShapefileFips(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_glossary = TypeGlossary(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_gridaggregation = TypeGridaggregation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_group = TypeGroup(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_hipchat_group = TypeHipchatGroup(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_homepage = TypeHomepage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_incident = TypeIncident(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_jeopardy = TypeJeopardy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_latlonimage = TypeLatlonimage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_lidar_collection = TypeLidarCollection(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_lidar_las = TypeLidarLas(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_lidar_lvis = TypeLidarLvis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_link = TypeLink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_localfiles = TypeLocalfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_locations = TypeLocations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_map_googlemap = TypeMapGooglemap(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_media_audiofile = TypeMediaAudiofile(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_media_imageloop = TypeMediaImageloop(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_media_photoalbum = TypeMediaPhotoalbum(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_media_video_channel = TypeMediaVideoChannel(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_media_video_quicktime = TypeMediaVideoQuicktime(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_media_youtubevideo = TypeMediaYoutubevideo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_notes = TypeNotes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_notes_jsonfile = TypeNotesJsonfile(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_notes_note = TypeNotesNote(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_notes_notebook = TypeNotesNotebook(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_nwsfeed = TypeNwsfeed(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_opendaplink = TypeOpendaplink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_owl_class = TypeOwlClass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_owl_ontology = TypeOwlOntology(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_pasteitentry = TypePasteitentry(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_point_text = TypePointText(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_police_stop_data = TypePoliceStopData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_poll = TypePoll(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_campaign = TypeProjectCampaign(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_casestudy = TypeProjectCasestudy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_contribution = TypeProjectContribution(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_dataformat = TypeProjectDataformat(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_dataset = TypeProjectDataset(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_deployment = TypeProjectDeployment(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_experiment = TypeProjectExperiment(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_fieldnote = TypeProjectFieldnote(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_gps_controlpoints = TypeProjectGpsControlpoints(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_gps_raw = TypeProjectGpsRaw(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_gps_rinex = TypeProjectGpsRinex(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_instrument = TypeProjectInstrument(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_learning_resource = TypeProjectLearningResource(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_meeting = TypeProjectMeeting(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_organization = TypeProjectOrganization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_program = TypeProjectProgram(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_project = TypeProjectProject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_service = TypeProjectService(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_site = TypeProjectSite(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_softwarepackage = TypeProjectSoftwarepackage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_standard_name = TypeProjectStandardName(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_surveylocation = TypeProjectSurveylocation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_term = TypeProjectTerm(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_visit = TypeProjectVisit(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_project_vocabulary = TypeProjectVocabulary(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_property_sales = TypePropertySales(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_propertydb = TypePropertydb(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_python_notebook = TypePythonNotebook(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_slack_team = TypeSlackTeam(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_statusboard = TypeStatusboard(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_sunrisesunset = TypeSunrisesunset(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_tasks = TypeTasks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_tmdbmovies = TypeTmdbmovies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_todo = TypeTodo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_trip_event = TypeTripEvent(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_trip_flight = TypeTripFlight(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_trip_hotel = TypeTripHotel(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_trip_report = TypeTripReport(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_trip_trip = TypeTripTrip(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_awc_metar = TypeTypeAwcMetar(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_biz_stockseries = TypeTypeBizStockseries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_bls_series = TypeTypeBlsSeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_bls_survey = TypeTypeBlsSurvey(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_census_acs = TypeTypeCensusAcs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_daymet = TypeTypeDaymet(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_db_table = TypeTypeDbTable(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_document_csv = TypeTypeDocumentCsv(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_document_doc = TypeTypeDocumentDoc(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_document_html = TypeTypeDocumentHTML(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_document_pdf = TypeTypeDocumentPdf(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_document_ppt = TypeTypeDocumentPpt(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_document_xls = TypeTypeDocumentXls(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_drilsdown_casestudy = TypeTypeDrilsdownCasestudy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_edgar_filing = TypeTypeEdgarFiling(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_eia_category = TypeTypeEiaCategory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_eia_series = TypeTypeEiaSeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_featureserver = TypeTypeEsriFeatureserver(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_geometryserver = TypeTypeEsriGeometryserver(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_gpserver = TypeTypeEsriGpserver(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_imageserver = TypeTypeEsriImageserver(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_layer = TypeTypeEsriLayer(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_mapserver = TypeTypeEsriMapserver(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_restfolder = TypeTypeEsriRestfolder(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_restserver = TypeTypeEsriRestserver(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_esri_restservice = TypeTypeEsriRestservice(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_extremes = TypeTypeExtremes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_fred_category = TypeTypeFredCategory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_fred_series = TypeTypeFredSeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_gtfs_agency = TypeTypeGtfsAgency(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_gtfs_route = TypeTypeGtfsRoute(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_gtfs_routes = TypeTypeGtfsRoutes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_gtfs_stop = TypeTypeGtfsStop(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_gtfs_stops = TypeTypeGtfsStops(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_gtfs_trip = TypeTypeGtfsTrip(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_hazarddata = TypeTypeHazarddata(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_hydro_colorado = TypeTypeHydroColorado(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_idv_bundle = TypeTypeIdvBundle(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_image = TypeTypeImage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_image_airport = TypeTypeImageAirport(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_image_webcam = TypeTypeImageWebcam(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_mb = TypeTypeMb(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_mb_collection = TypeTypeMbCollection(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_mb_point_basic = TypeTypeMbPointBasic(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_metameta_dictionary = TypeTypeMetametaDictionary(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_metameta_field = TypeTypeMetametaField(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_nasaames = TypeTypeNasaames(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_ncss = TypeTypeNcss(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_nitf = TypeTypeNitf(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ameriflux_level2 = TypeTypePointAmerifluxLevel2(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_amrc_final = TypeTypePointAmrcFinal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_amrc_freewave = TypeTypePointAmrcFreewave(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_czo = TypeTypePointCzo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_gcnet = TypeTypePointGcnet(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_geomag_iaga2002 = TypeTypePointGeomagIaga2002(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_hydro_waterml = TypeTypePointHydroWaterml(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_icebridge_atm_icessn = TypeTypePointIcebridgeAtmIcessn(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_icebridge_atm_qfit = TypeTypePointIcebridgeAtmQfit(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_icebridge_mccords_irmcr2 = TypeTypePointIcebridgeMccordsIrmcr2(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_icebridge_mccords_irmcr3 = TypeTypePointIcebridgeMccordsIrmcr3(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_icebridge_paris = TypeTypePointIcebridgeParis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_idv = TypeTypePointIdv(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_inline = TypeTypePointInline(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ncdc_climate = TypeTypePointNcdcClimate(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_netcdf = TypeTypePointNetcdf(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_noaa_carbon = TypeTypePointNoaaCarbon(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_noaa_flask_event = TypeTypePointNoaaFlaskEvent(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_noaa_flask_month = TypeTypePointNoaaFlaskMonth(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_noaa_madis = TypeTypePointNoaaMadis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_noaa_tower = TypeTypePointNoaaTower(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_cnv = TypeTypePointOceanCnv(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_csv_sado_tts = TypeTypePointOceanCsvSadoTts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_csv_sado_meteo = TypeTypePointOceanCsvSadoMeteo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_csv_sado_position = TypeTypePointOceanCsvSadoPosition(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_netcdf_glider = TypeTypePointOceanNetcdfGlider(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_netcdf_track = TypeTypePointOceanNetcdfTrack(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_ocean_ooi_dmgx = TypeTypePointOceanOoiDmgx(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_openaq = TypeTypePointOpenaq(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_pbo_position_time_series = TypeTypePointPboPositionTimeSeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_simple_records = TypeTypePointSimpleRecords(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_snotel = TypeTypePointSnotel(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_text = TypeTypePointText(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_point_wsbb_ggp = TypeTypePointWsbbGgp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_psd_monthly_climate_index = TypeTypePsdMonthlyClimateIndex(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_quandl_series = TypeTypeQuandlSeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_service_group = TypeTypeServiceGroup(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_service_link = TypeTypeServiceLink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_socrata_series = TypeTypeSocrataSeries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_sounding_cod = TypeTypeSoundingCod(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_sounding_frd = TypeTypeSoundingFrd(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_sounding_gsd = TypeTypeSoundingGsd(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_sounding_wyoming = TypeTypeSoundingWyoming(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_tmy = TypeTypeTmy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_tweet = TypeTypeTweet(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_usgs_gauge = TypeTypeUsgsGauge(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_virtual = TypeTypeVirtual(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_wms_capabilities = TypeTypeWmsCapabilities(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_type_wms_layer = TypeTypeWmsLayer(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_ufo_sightings = TypeUfoSightings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_us_places = TypeUsPlaces(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_vote_yesno = TypeVoteYesno(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_weblog = TypeWeblog(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.type_wikipage = TypeWikipage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    