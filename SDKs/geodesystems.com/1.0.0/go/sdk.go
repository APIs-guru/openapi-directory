package sdk

import (
	"net/http"
	"openapi/internal/utils"
)

var ServerList = []string{
	"https://geodesystems.com:443/",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	ServiceMediaTabularExtractsheet      *ServiceMediaTabularExtractsheet
	Type2017BoulderElectionExpenditures  *Type2017BoulderElectionExpenditures
	TypeAny                              *TypeAny
	TypeBeforeafter                      *TypeBeforeafter
	TypeBiblio                           *TypeBiblio
	TypeBioDicom                         *TypeBioDicom
	TypeBioDicomTest                     *TypeBioDicomTest
	TypeBioFasta                         *TypeBioFasta
	TypeBioFastq                         *TypeBioFastq
	TypeBioHmmerIndex                    *TypeBioHmmerIndex
	TypeBioOmeTiff                       *TypeBioOmeTiff
	TypeBioOntologyAssay                 *TypeBioOntologyAssay
	TypeBioOntologyCohort                *TypeBioOntologyCohort
	TypeBioOntologyPerson                *TypeBioOntologyPerson
	TypeBioOntologySample                *TypeBioOntologySample
	TypeBioOntologySeries                *TypeBioOntologySeries
	TypeBioOntologyStudy                 *TypeBioOntologyStudy
	TypeBioSam                           *TypeBioSam
	TypeBioSfPdb                         *TypeBioSfPdb
	TypeBioSra                           *TypeBioSra
	TypeBioStockholm                     *TypeBioStockholm
	TypeBioTaxonomy                      *TypeBioTaxonomy
	TypeBlogentry                        *TypeBlogentry
	TypeBolderRentalHousing              *TypeBolderRentalHousing
	TypeBookmarks                        *TypeBookmarks
	TypeBostonCrime                      *TypeBostonCrime
	TypeBoulder2017ElectionContributions *TypeBoulder2017ElectionContributions
	TypeBoulderCampaignContributions     *TypeBoulderCampaignContributions
	TypeBoulderConsultingServices        *TypeBoulderConsultingServices
	TypeBoulderCountyVoterDetails        *TypeBoulderCountyVoterDetails
	TypeBoulderCrimes                    *TypeBoulderCrimes
	TypeBoulderEmails                    *TypeBoulderEmails
	TypeBoulderEmployeeSalaries          *TypeBoulderEmployeeSalaries
	TypeCalendar                         *TypeCalendar
	TypeCampaignDonors                   *TypeCampaignDonors
	TypeCampaignExpenditures             *TypeCampaignExpenditures
	TypeCataloglink                      *TypeCataloglink
	TypeCdmGrid                          *TypeCdmGrid
	TypeChatroom                         *TypeChatroom
	TypeColoradoWaterRights              *TypeColoradoWaterRights
	TypeCommitteeDonations               *TypeCommitteeDonations
	TypeCommunityDatahub                 *TypeCommunityDatahub
	TypeCommunityResource                *TypeCommunityResource
	TypeConstructionPermits              *TypeConstructionPermits
	TypeContact                          *TypeContact
	TypeDbCoIndicators                   *TypeDbCoIndicators
	TypeEarthSatelliteLandsat            *TypeEarthSatelliteLandsat
	TypeFaq                              *TypeFaq
	TypeFecPacs                          *TypeFecPacs
	TypeFeccandidates                    *TypeFeccandidates
	TypeFeed                             *TypeFeed
	TypeFile                             *TypeFile
	TypeFitsData                         *TypeFitsData
	TypeFtp                              *TypeFtp
	TypeGadgetsCountdown                 *TypeGadgetsCountdown
	TypeGadgetsStock                     *TypeGadgetsStock
	TypeGadgetsWeather                   *TypeGadgetsWeather
	TypeGazeteerCensusTracts             *TypeGazeteerCensusTracts
	TypeGazeteerCounties                 *TypeGazeteerCounties
	TypeGeoGe                            *TypeGeoGe
	TypeGeoGeotiff                       *TypeGeoGeotiff
	TypeGeoGpx                           *TypeGeoGpx
	TypeGeoHdf5                          *TypeGeoHdf5
	TypeGeoKml                           *TypeGeoKml
	TypeGeoShapefile                     *TypeGeoShapefile
	TypeGeoShapefileFips                 *TypeGeoShapefileFips
	TypeGlossary                         *TypeGlossary
	TypeGridaggregation                  *TypeGridaggregation
	TypeGroup                            *TypeGroup
	TypeHipchatGroup                     *TypeHipchatGroup
	TypeHomepage                         *TypeHomepage
	TypeIncident                         *TypeIncident
	TypeJeopardy                         *TypeJeopardy
	TypeLatlonimage                      *TypeLatlonimage
	TypeLidarCollection                  *TypeLidarCollection
	TypeLidarLas                         *TypeLidarLas
	TypeLidarLvis                        *TypeLidarLvis
	TypeLink                             *TypeLink
	TypeLocalfiles                       *TypeLocalfiles
	TypeLocations                        *TypeLocations
	TypeMapGooglemap                     *TypeMapGooglemap
	TypeMediaAudiofile                   *TypeMediaAudiofile
	TypeMediaImageloop                   *TypeMediaImageloop
	TypeMediaPhotoalbum                  *TypeMediaPhotoalbum
	TypeMediaVideoChannel                *TypeMediaVideoChannel
	TypeMediaVideoQuicktime              *TypeMediaVideoQuicktime
	TypeMediaYoutubevideo                *TypeMediaYoutubevideo
	TypeNotes                            *TypeNotes
	TypeNotesJsonfile                    *TypeNotesJsonfile
	TypeNotesNote                        *TypeNotesNote
	TypeNotesNotebook                    *TypeNotesNotebook
	TypeNwsfeed                          *TypeNwsfeed
	TypeOpendaplink                      *TypeOpendaplink
	TypeOwlClass                         *TypeOwlClass
	TypeOwlOntology                      *TypeOwlOntology
	TypePasteitentry                     *TypePasteitentry
	TypePointText                        *TypePointText
	TypePoliceStopData                   *TypePoliceStopData
	TypePoll                             *TypePoll
	TypeProjectCampaign                  *TypeProjectCampaign
	TypeProjectCasestudy                 *TypeProjectCasestudy
	TypeProjectContribution              *TypeProjectContribution
	TypeProjectDataformat                *TypeProjectDataformat
	TypeProjectDataset                   *TypeProjectDataset
	TypeProjectDeployment                *TypeProjectDeployment
	TypeProjectExperiment                *TypeProjectExperiment
	TypeProjectFieldnote                 *TypeProjectFieldnote
	TypeProjectGpsControlpoints          *TypeProjectGpsControlpoints
	TypeProjectGpsRaw                    *TypeProjectGpsRaw
	TypeProjectGpsRinex                  *TypeProjectGpsRinex
	TypeProjectInstrument                *TypeProjectInstrument
	TypeProjectLearningResource          *TypeProjectLearningResource
	TypeProjectMeeting                   *TypeProjectMeeting
	TypeProjectOrganization              *TypeProjectOrganization
	TypeProjectProgram                   *TypeProjectProgram
	TypeProjectProject                   *TypeProjectProject
	TypeProjectService                   *TypeProjectService
	TypeProjectSite                      *TypeProjectSite
	TypeProjectSoftwarepackage           *TypeProjectSoftwarepackage
	TypeProjectStandardName              *TypeProjectStandardName
	TypeProjectSurveylocation            *TypeProjectSurveylocation
	TypeProjectTerm                      *TypeProjectTerm
	TypeProjectVisit                     *TypeProjectVisit
	TypeProjectVocabulary                *TypeProjectVocabulary
	TypePropertySales                    *TypePropertySales
	TypePropertydb                       *TypePropertydb
	TypePythonNotebook                   *TypePythonNotebook
	TypeSlackTeam                        *TypeSlackTeam
	TypeStatusboard                      *TypeStatusboard
	TypeSunrisesunset                    *TypeSunrisesunset
	TypeTasks                            *TypeTasks
	TypeTmdbmovies                       *TypeTmdbmovies
	TypeTodo                             *TypeTodo
	TypeTripEvent                        *TypeTripEvent
	TypeTripFlight                       *TypeTripFlight
	TypeTripHotel                        *TypeTripHotel
	TypeTripReport                       *TypeTripReport
	TypeTripTrip                         *TypeTripTrip
	TypeTypeAwcMetar                     *TypeTypeAwcMetar
	TypeTypeBizStockseries               *TypeTypeBizStockseries
	TypeTypeBlsSeries                    *TypeTypeBlsSeries
	TypeTypeBlsSurvey                    *TypeTypeBlsSurvey
	TypeTypeCensusAcs                    *TypeTypeCensusAcs
	TypeTypeDaymet                       *TypeTypeDaymet
	TypeTypeDbTable                      *TypeTypeDbTable
	TypeTypeDocumentCsv                  *TypeTypeDocumentCsv
	TypeTypeDocumentDoc                  *TypeTypeDocumentDoc
	TypeTypeDocumentHTML                 *TypeTypeDocumentHTML
	TypeTypeDocumentPdf                  *TypeTypeDocumentPdf
	TypeTypeDocumentPpt                  *TypeTypeDocumentPpt
	TypeTypeDocumentXls                  *TypeTypeDocumentXls
	TypeTypeDrilsdownCasestudy           *TypeTypeDrilsdownCasestudy
	TypeTypeEdgarFiling                  *TypeTypeEdgarFiling
	TypeTypeEiaCategory                  *TypeTypeEiaCategory
	TypeTypeEiaSeries                    *TypeTypeEiaSeries
	TypeTypeEsriFeatureserver            *TypeTypeEsriFeatureserver
	TypeTypeEsriGeometryserver           *TypeTypeEsriGeometryserver
	TypeTypeEsriGpserver                 *TypeTypeEsriGpserver
	TypeTypeEsriImageserver              *TypeTypeEsriImageserver
	TypeTypeEsriLayer                    *TypeTypeEsriLayer
	TypeTypeEsriMapserver                *TypeTypeEsriMapserver
	TypeTypeEsriRestfolder               *TypeTypeEsriRestfolder
	TypeTypeEsriRestserver               *TypeTypeEsriRestserver
	TypeTypeEsriRestservice              *TypeTypeEsriRestservice
	TypeTypeExtremes                     *TypeTypeExtremes
	TypeTypeFredCategory                 *TypeTypeFredCategory
	TypeTypeFredSeries                   *TypeTypeFredSeries
	TypeTypeGtfsAgency                   *TypeTypeGtfsAgency
	TypeTypeGtfsRoute                    *TypeTypeGtfsRoute
	TypeTypeGtfsRoutes                   *TypeTypeGtfsRoutes
	TypeTypeGtfsStop                     *TypeTypeGtfsStop
	TypeTypeGtfsStops                    *TypeTypeGtfsStops
	TypeTypeGtfsTrip                     *TypeTypeGtfsTrip
	TypeTypeHazarddata                   *TypeTypeHazarddata
	TypeTypeHydroColorado                *TypeTypeHydroColorado
	TypeTypeIdvBundle                    *TypeTypeIdvBundle
	TypeTypeImage                        *TypeTypeImage
	TypeTypeImageAirport                 *TypeTypeImageAirport
	TypeTypeImageWebcam                  *TypeTypeImageWebcam
	TypeTypeMb                           *TypeTypeMb
	TypeTypeMbCollection                 *TypeTypeMbCollection
	TypeTypeMbPointBasic                 *TypeTypeMbPointBasic
	TypeTypeMetametaDictionary           *TypeTypeMetametaDictionary
	TypeTypeMetametaField                *TypeTypeMetametaField
	TypeTypeNasaames                     *TypeTypeNasaames
	TypeTypeNcss                         *TypeTypeNcss
	TypeTypeNitf                         *TypeTypeNitf
	TypeTypePointAmerifluxLevel2         *TypeTypePointAmerifluxLevel2
	TypeTypePointAmrcFinal               *TypeTypePointAmrcFinal
	TypeTypePointAmrcFreewave            *TypeTypePointAmrcFreewave
	TypeTypePointCzo                     *TypeTypePointCzo
	TypeTypePointGcnet                   *TypeTypePointGcnet
	TypeTypePointGeomagIaga2002          *TypeTypePointGeomagIaga2002
	TypeTypePointHydroWaterml            *TypeTypePointHydroWaterml
	TypeTypePointIcebridgeAtmIcessn      *TypeTypePointIcebridgeAtmIcessn
	TypeTypePointIcebridgeAtmQfit        *TypeTypePointIcebridgeAtmQfit
	TypeTypePointIcebridgeMccordsIrmcr2  *TypeTypePointIcebridgeMccordsIrmcr2
	TypeTypePointIcebridgeMccordsIrmcr3  *TypeTypePointIcebridgeMccordsIrmcr3
	TypeTypePointIcebridgeParis          *TypeTypePointIcebridgeParis
	TypeTypePointIdv                     *TypeTypePointIdv
	TypeTypePointInline                  *TypeTypePointInline
	TypeTypePointNcdcClimate             *TypeTypePointNcdcClimate
	TypeTypePointNetcdf                  *TypeTypePointNetcdf
	TypeTypePointNoaaCarbon              *TypeTypePointNoaaCarbon
	TypeTypePointNoaaFlaskEvent          *TypeTypePointNoaaFlaskEvent
	TypeTypePointNoaaFlaskMonth          *TypeTypePointNoaaFlaskMonth
	TypeTypePointNoaaMadis               *TypeTypePointNoaaMadis
	TypeTypePointNoaaTower               *TypeTypePointNoaaTower
	TypeTypePointOceanCnv                *TypeTypePointOceanCnv
	TypeTypePointOceanCsvSadoTts         *TypeTypePointOceanCsvSadoTts
	TypeTypePointOceanCsvSadoMeteo       *TypeTypePointOceanCsvSadoMeteo
	TypeTypePointOceanCsvSadoPosition    *TypeTypePointOceanCsvSadoPosition
	TypeTypePointOceanNetcdfGlider       *TypeTypePointOceanNetcdfGlider
	TypeTypePointOceanNetcdfTrack        *TypeTypePointOceanNetcdfTrack
	TypeTypePointOceanOoiDmgx            *TypeTypePointOceanOoiDmgx
	TypeTypePointOpenaq                  *TypeTypePointOpenaq
	TypeTypePointPboPositionTimeSeries   *TypeTypePointPboPositionTimeSeries
	TypeTypePointSimpleRecords           *TypeTypePointSimpleRecords
	TypeTypePointSnotel                  *TypeTypePointSnotel
	TypeTypePointText                    *TypeTypePointText
	TypeTypePointWsbbGgp                 *TypeTypePointWsbbGgp
	TypeTypePsdMonthlyClimateIndex       *TypeTypePsdMonthlyClimateIndex
	TypeTypeQuandlSeries                 *TypeTypeQuandlSeries
	TypeTypeServiceGroup                 *TypeTypeServiceGroup
	TypeTypeServiceLink                  *TypeTypeServiceLink
	TypeTypeSocrataSeries                *TypeTypeSocrataSeries
	TypeTypeSoundingCod                  *TypeTypeSoundingCod
	TypeTypeSoundingFrd                  *TypeTypeSoundingFrd
	TypeTypeSoundingGsd                  *TypeTypeSoundingGsd
	TypeTypeSoundingWyoming              *TypeTypeSoundingWyoming
	TypeTypeTmy                          *TypeTypeTmy
	TypeTypeTweet                        *TypeTypeTweet
	TypeTypeUsgsGauge                    *TypeTypeUsgsGauge
	TypeTypeVirtual                      *TypeTypeVirtual
	TypeTypeWmsCapabilities              *TypeTypeWmsCapabilities
	TypeTypeWmsLayer                     *TypeTypeWmsLayer
	TypeUfoSightings                     *TypeUfoSightings
	TypeUsPlaces                         *TypeUsPlaces
	TypeVoteYesno                        *TypeVoteYesno
	TypeWeblog                           *TypeWeblog
	TypeWikipage                         *TypeWikipage

	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.ServiceMediaTabularExtractsheet = NewServiceMediaTabularExtractsheet(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Type2017BoulderElectionExpenditures = NewType2017BoulderElectionExpenditures(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeAny = NewTypeAny(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBeforeafter = NewTypeBeforeafter(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBiblio = NewTypeBiblio(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioDicom = NewTypeBioDicom(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioDicomTest = NewTypeBioDicomTest(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioFasta = NewTypeBioFasta(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioFastq = NewTypeBioFastq(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioHmmerIndex = NewTypeBioHmmerIndex(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOmeTiff = NewTypeBioOmeTiff(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOntologyAssay = NewTypeBioOntologyAssay(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOntologyCohort = NewTypeBioOntologyCohort(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOntologyPerson = NewTypeBioOntologyPerson(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOntologySample = NewTypeBioOntologySample(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOntologySeries = NewTypeBioOntologySeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioOntologyStudy = NewTypeBioOntologyStudy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioSam = NewTypeBioSam(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioSfPdb = NewTypeBioSfPdb(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioSra = NewTypeBioSra(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioStockholm = NewTypeBioStockholm(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBioTaxonomy = NewTypeBioTaxonomy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBlogentry = NewTypeBlogentry(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBolderRentalHousing = NewTypeBolderRentalHousing(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBookmarks = NewTypeBookmarks(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBostonCrime = NewTypeBostonCrime(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulder2017ElectionContributions = NewTypeBoulder2017ElectionContributions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulderCampaignContributions = NewTypeBoulderCampaignContributions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulderConsultingServices = NewTypeBoulderConsultingServices(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulderCountyVoterDetails = NewTypeBoulderCountyVoterDetails(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulderCrimes = NewTypeBoulderCrimes(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulderEmails = NewTypeBoulderEmails(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeBoulderEmployeeSalaries = NewTypeBoulderEmployeeSalaries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCalendar = NewTypeCalendar(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCampaignDonors = NewTypeCampaignDonors(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCampaignExpenditures = NewTypeCampaignExpenditures(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCataloglink = NewTypeCataloglink(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCdmGrid = NewTypeCdmGrid(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeChatroom = NewTypeChatroom(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeColoradoWaterRights = NewTypeColoradoWaterRights(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCommitteeDonations = NewTypeCommitteeDonations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCommunityDatahub = NewTypeCommunityDatahub(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeCommunityResource = NewTypeCommunityResource(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeConstructionPermits = NewTypeConstructionPermits(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeContact = NewTypeContact(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeDbCoIndicators = NewTypeDbCoIndicators(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeEarthSatelliteLandsat = NewTypeEarthSatelliteLandsat(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFaq = NewTypeFaq(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFecPacs = NewTypeFecPacs(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFeccandidates = NewTypeFeccandidates(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFeed = NewTypeFeed(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFile = NewTypeFile(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFitsData = NewTypeFitsData(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeFtp = NewTypeFtp(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGadgetsCountdown = NewTypeGadgetsCountdown(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGadgetsStock = NewTypeGadgetsStock(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGadgetsWeather = NewTypeGadgetsWeather(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGazeteerCensusTracts = NewTypeGazeteerCensusTracts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGazeteerCounties = NewTypeGazeteerCounties(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoGe = NewTypeGeoGe(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoGeotiff = NewTypeGeoGeotiff(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoGpx = NewTypeGeoGpx(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoHdf5 = NewTypeGeoHdf5(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoKml = NewTypeGeoKml(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoShapefile = NewTypeGeoShapefile(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGeoShapefileFips = NewTypeGeoShapefileFips(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGlossary = NewTypeGlossary(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGridaggregation = NewTypeGridaggregation(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeGroup = NewTypeGroup(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeHipchatGroup = NewTypeHipchatGroup(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeHomepage = NewTypeHomepage(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeIncident = NewTypeIncident(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeJeopardy = NewTypeJeopardy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLatlonimage = NewTypeLatlonimage(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLidarCollection = NewTypeLidarCollection(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLidarLas = NewTypeLidarLas(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLidarLvis = NewTypeLidarLvis(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLink = NewTypeLink(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLocalfiles = NewTypeLocalfiles(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeLocations = NewTypeLocations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMapGooglemap = NewTypeMapGooglemap(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMediaAudiofile = NewTypeMediaAudiofile(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMediaImageloop = NewTypeMediaImageloop(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMediaPhotoalbum = NewTypeMediaPhotoalbum(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMediaVideoChannel = NewTypeMediaVideoChannel(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMediaVideoQuicktime = NewTypeMediaVideoQuicktime(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeMediaYoutubevideo = NewTypeMediaYoutubevideo(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeNotes = NewTypeNotes(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeNotesJsonfile = NewTypeNotesJsonfile(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeNotesNote = NewTypeNotesNote(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeNotesNotebook = NewTypeNotesNotebook(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeNwsfeed = NewTypeNwsfeed(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeOpendaplink = NewTypeOpendaplink(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeOwlClass = NewTypeOwlClass(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeOwlOntology = NewTypeOwlOntology(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePasteitentry = NewTypePasteitentry(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePointText = NewTypePointText(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePoliceStopData = NewTypePoliceStopData(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePoll = NewTypePoll(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectCampaign = NewTypeProjectCampaign(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectCasestudy = NewTypeProjectCasestudy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectContribution = NewTypeProjectContribution(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectDataformat = NewTypeProjectDataformat(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectDataset = NewTypeProjectDataset(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectDeployment = NewTypeProjectDeployment(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectExperiment = NewTypeProjectExperiment(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectFieldnote = NewTypeProjectFieldnote(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectGpsControlpoints = NewTypeProjectGpsControlpoints(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectGpsRaw = NewTypeProjectGpsRaw(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectGpsRinex = NewTypeProjectGpsRinex(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectInstrument = NewTypeProjectInstrument(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectLearningResource = NewTypeProjectLearningResource(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectMeeting = NewTypeProjectMeeting(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectOrganization = NewTypeProjectOrganization(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectProgram = NewTypeProjectProgram(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectProject = NewTypeProjectProject(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectService = NewTypeProjectService(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectSite = NewTypeProjectSite(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectSoftwarepackage = NewTypeProjectSoftwarepackage(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectStandardName = NewTypeProjectStandardName(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectSurveylocation = NewTypeProjectSurveylocation(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectTerm = NewTypeProjectTerm(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectVisit = NewTypeProjectVisit(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeProjectVocabulary = NewTypeProjectVocabulary(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePropertySales = NewTypePropertySales(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePropertydb = NewTypePropertydb(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypePythonNotebook = NewTypePythonNotebook(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeSlackTeam = NewTypeSlackTeam(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeStatusboard = NewTypeStatusboard(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeSunrisesunset = NewTypeSunrisesunset(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTasks = NewTypeTasks(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTmdbmovies = NewTypeTmdbmovies(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTodo = NewTypeTodo(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTripEvent = NewTypeTripEvent(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTripFlight = NewTypeTripFlight(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTripHotel = NewTypeTripHotel(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTripReport = NewTypeTripReport(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTripTrip = NewTypeTripTrip(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeAwcMetar = NewTypeTypeAwcMetar(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeBizStockseries = NewTypeTypeBizStockseries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeBlsSeries = NewTypeTypeBlsSeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeBlsSurvey = NewTypeTypeBlsSurvey(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeCensusAcs = NewTypeTypeCensusAcs(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDaymet = NewTypeTypeDaymet(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDbTable = NewTypeTypeDbTable(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDocumentCsv = NewTypeTypeDocumentCsv(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDocumentDoc = NewTypeTypeDocumentDoc(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDocumentHTML = NewTypeTypeDocumentHTML(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDocumentPdf = NewTypeTypeDocumentPdf(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDocumentPpt = NewTypeTypeDocumentPpt(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDocumentXls = NewTypeTypeDocumentXls(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeDrilsdownCasestudy = NewTypeTypeDrilsdownCasestudy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEdgarFiling = NewTypeTypeEdgarFiling(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEiaCategory = NewTypeTypeEiaCategory(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEiaSeries = NewTypeTypeEiaSeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriFeatureserver = NewTypeTypeEsriFeatureserver(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriGeometryserver = NewTypeTypeEsriGeometryserver(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriGpserver = NewTypeTypeEsriGpserver(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriImageserver = NewTypeTypeEsriImageserver(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriLayer = NewTypeTypeEsriLayer(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriMapserver = NewTypeTypeEsriMapserver(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriRestfolder = NewTypeTypeEsriRestfolder(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriRestserver = NewTypeTypeEsriRestserver(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeEsriRestservice = NewTypeTypeEsriRestservice(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeExtremes = NewTypeTypeExtremes(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeFredCategory = NewTypeTypeFredCategory(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeFredSeries = NewTypeTypeFredSeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeGtfsAgency = NewTypeTypeGtfsAgency(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeGtfsRoute = NewTypeTypeGtfsRoute(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeGtfsRoutes = NewTypeTypeGtfsRoutes(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeGtfsStop = NewTypeTypeGtfsStop(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeGtfsStops = NewTypeTypeGtfsStops(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeGtfsTrip = NewTypeTypeGtfsTrip(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeHazarddata = NewTypeTypeHazarddata(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeHydroColorado = NewTypeTypeHydroColorado(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeIdvBundle = NewTypeTypeIdvBundle(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeImage = NewTypeTypeImage(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeImageAirport = NewTypeTypeImageAirport(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeImageWebcam = NewTypeTypeImageWebcam(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeMb = NewTypeTypeMb(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeMbCollection = NewTypeTypeMbCollection(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeMbPointBasic = NewTypeTypeMbPointBasic(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeMetametaDictionary = NewTypeTypeMetametaDictionary(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeMetametaField = NewTypeTypeMetametaField(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeNasaames = NewTypeTypeNasaames(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeNcss = NewTypeTypeNcss(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeNitf = NewTypeTypeNitf(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointAmerifluxLevel2 = NewTypeTypePointAmerifluxLevel2(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointAmrcFinal = NewTypeTypePointAmrcFinal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointAmrcFreewave = NewTypeTypePointAmrcFreewave(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointCzo = NewTypeTypePointCzo(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointGcnet = NewTypeTypePointGcnet(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointGeomagIaga2002 = NewTypeTypePointGeomagIaga2002(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointHydroWaterml = NewTypeTypePointHydroWaterml(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointIcebridgeAtmIcessn = NewTypeTypePointIcebridgeAtmIcessn(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointIcebridgeAtmQfit = NewTypeTypePointIcebridgeAtmQfit(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointIcebridgeMccordsIrmcr2 = NewTypeTypePointIcebridgeMccordsIrmcr2(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointIcebridgeMccordsIrmcr3 = NewTypeTypePointIcebridgeMccordsIrmcr3(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointIcebridgeParis = NewTypeTypePointIcebridgeParis(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointIdv = NewTypeTypePointIdv(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointInline = NewTypeTypePointInline(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNcdcClimate = NewTypeTypePointNcdcClimate(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNetcdf = NewTypeTypePointNetcdf(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNoaaCarbon = NewTypeTypePointNoaaCarbon(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNoaaFlaskEvent = NewTypeTypePointNoaaFlaskEvent(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNoaaFlaskMonth = NewTypeTypePointNoaaFlaskMonth(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNoaaMadis = NewTypeTypePointNoaaMadis(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointNoaaTower = NewTypeTypePointNoaaTower(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanCnv = NewTypeTypePointOceanCnv(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanCsvSadoTts = NewTypeTypePointOceanCsvSadoTts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanCsvSadoMeteo = NewTypeTypePointOceanCsvSadoMeteo(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanCsvSadoPosition = NewTypeTypePointOceanCsvSadoPosition(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanNetcdfGlider = NewTypeTypePointOceanNetcdfGlider(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanNetcdfTrack = NewTypeTypePointOceanNetcdfTrack(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOceanOoiDmgx = NewTypeTypePointOceanOoiDmgx(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointOpenaq = NewTypeTypePointOpenaq(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointPboPositionTimeSeries = NewTypeTypePointPboPositionTimeSeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointSimpleRecords = NewTypeTypePointSimpleRecords(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointSnotel = NewTypeTypePointSnotel(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointText = NewTypeTypePointText(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePointWsbbGgp = NewTypeTypePointWsbbGgp(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypePsdMonthlyClimateIndex = NewTypeTypePsdMonthlyClimateIndex(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeQuandlSeries = NewTypeTypeQuandlSeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeServiceGroup = NewTypeTypeServiceGroup(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeServiceLink = NewTypeTypeServiceLink(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeSocrataSeries = NewTypeTypeSocrataSeries(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeSoundingCod = NewTypeTypeSoundingCod(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeSoundingFrd = NewTypeTypeSoundingFrd(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeSoundingGsd = NewTypeTypeSoundingGsd(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeSoundingWyoming = NewTypeTypeSoundingWyoming(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeTmy = NewTypeTypeTmy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeTweet = NewTypeTypeTweet(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeUsgsGauge = NewTypeTypeUsgsGauge(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeVirtual = NewTypeTypeVirtual(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeWmsCapabilities = NewTypeTypeWmsCapabilities(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeTypeWmsLayer = NewTypeTypeWmsLayer(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeUfoSightings = NewTypeUfoSightings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeUsPlaces = NewTypeUsPlaces(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeVoteYesno = NewTypeVoteYesno(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeWeblog = NewTypeWeblog(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TypeWikipage = NewTypeWikipage(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
