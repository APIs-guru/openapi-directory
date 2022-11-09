import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * API to call: Extract sheets
    **/
    MediaTabularExtractsheet(req: operations.MediaTabularExtractsheetRequest, config?: AxiosRequestConfig): Promise<operations.MediaTabularExtractsheetResponse>;
    /**
     * API to search for entries of type 2017 Boulder Election Expenditures
    **/
    Search2017BoulderElectionExpenditures(req: operations.Search2017BoulderElectionExpendituresRequest, config?: AxiosRequestConfig): Promise<operations.Search2017BoulderElectionExpendituresResponse>;
    /**
     * API to search for entries of type Any file type
    **/
    SearchAny(req: operations.SearchAnyRequest, config?: AxiosRequestConfig): Promise<operations.SearchAnyResponse>;
    /**
     * API to search for entries of type Before and After Images
    **/
    SearchBeforeafter(req: operations.SearchBeforeafterRequest, config?: AxiosRequestConfig): Promise<operations.SearchBeforeafterResponse>;
    /**
     * API to search for entries of type Bibliographic Entry
    **/
    SearchBiblio(req: operations.SearchBiblioRequest, config?: AxiosRequestConfig): Promise<operations.SearchBiblioResponse>;
    /**
     * API to search for entries of type DICOM File
    **/
    SearchBioDicom(req: operations.SearchBioDicomRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioDicomResponse>;
    /**
     * API to search for entries of type DICOM Test File
    **/
    SearchBioDicomTest(req: operations.SearchBioDicomTestRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioDicomTestResponse>;
    /**
     * API to search for entries of type FASTA File
    **/
    SearchBioFasta(req: operations.SearchBioFastaRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioFastaResponse>;
    /**
     * API to search for entries of type FASTQ File
    **/
    SearchBioFastq(req: operations.SearchBioFastqRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioFastqResponse>;
    /**
     * API to search for entries of type HMMER Index File
    **/
    SearchBioHmmerIndex(req: operations.SearchBioHmmerIndexRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioHmmerIndexResponse>;
    /**
     * API to search for entries of type OME TIFF File
    **/
    SearchBioOmeTiff(req: operations.SearchBioOmeTiffRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOmeTiffResponse>;
    /**
     * API to search for entries of type Assay
    **/
    SearchBioOntologyAssay(req: operations.SearchBioOntologyAssayRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyAssayResponse>;
    /**
     * API to search for entries of type Cohort
    **/
    SearchBioOntologyCohort(req: operations.SearchBioOntologyCohortRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyCohortResponse>;
    /**
     * API to search for entries of type Person
    **/
    SearchBioOntologyPerson(req: operations.SearchBioOntologyPersonRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyPersonResponse>;
    /**
     * API to search for entries of type Sample
    **/
    SearchBioOntologySample(req: operations.SearchBioOntologySampleRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologySampleResponse>;
    /**
     * API to search for entries of type Series
    **/
    SearchBioOntologySeries(req: operations.SearchBioOntologySeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologySeriesResponse>;
    /**
     * API to search for entries of type Study
    **/
    SearchBioOntologyStudy(req: operations.SearchBioOntologyStudyRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyStudyResponse>;
    /**
     * API to search for entries of type SAM Data
    **/
    SearchBioSam(req: operations.SearchBioSamRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioSamResponse>;
    /**
     * API to search for entries of type PDB Protein File
    **/
    SearchBioSfPdb(req: operations.SearchBioSfPdbRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioSfPdbResponse>;
    /**
     * API to search for entries of type Sequence Read Archive
    **/
    SearchBioSra(req: operations.SearchBioSraRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioSraResponse>;
    /**
     * API to search for entries of type Stockholm File
    **/
    SearchBioStockholm(req: operations.SearchBioStockholmRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioStockholmResponse>;
    /**
     * API to search for entries of type Taxonomic Entry
    **/
    SearchBioTaxonomy(req: operations.SearchBioTaxonomyRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioTaxonomyResponse>;
    /**
     * API to search for entries of type Weblog Entry
    **/
    SearchBlogentry(req: operations.SearchBlogentryRequest, config?: AxiosRequestConfig): Promise<operations.SearchBlogentryResponse>;
    /**
     * API to search for entries of type Boulder Rental Housing
    **/
    SearchBolderRentalHousing(req: operations.SearchBolderRentalHousingRequest, config?: AxiosRequestConfig): Promise<operations.SearchBolderRentalHousingResponse>;
    /**
     * API to search for entries of type Bookmarks
    **/
    SearchBookmarks(req: operations.SearchBookmarksRequest, config?: AxiosRequestConfig): Promise<operations.SearchBookmarksResponse>;
    /**
     * API to search for entries of type Boston Crime
    **/
    SearchBostonCrime(req: operations.SearchBostonCrimeRequest, config?: AxiosRequestConfig): Promise<operations.SearchBostonCrimeResponse>;
    /**
     * API to search for entries of type Boulder 2017 Election Contributions
    **/
    SearchBoulder2017ElectionContributions(req: operations.SearchBoulder2017ElectionContributionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulder2017ElectionContributionsResponse>;
    /**
     * API to search for entries of type Boulder Campaign Contributions
    **/
    SearchBoulderCampaignContributions(req: operations.SearchBoulderCampaignContributionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderCampaignContributionsResponse>;
    /**
     * API to search for entries of type Boulder Consulting Services Database
    **/
    SearchBoulderConsultingServices(req: operations.SearchBoulderConsultingServicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderConsultingServicesResponse>;
    /**
     * API to search for entries of type Boulder County Voter Details
    **/
    SearchBoulderCountyVoterDetails(req: operations.SearchBoulderCountyVoterDetailsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderCountyVoterDetailsResponse>;
    /**
     * API to search for entries of type Boulder Crime Reports
    **/
    SearchBoulderCrimes(req: operations.SearchBoulderCrimesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderCrimesResponse>;
    /**
     * API to search for entries of type Boulder Council Emails
    **/
    SearchBoulderEmails(req: operations.SearchBoulderEmailsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderEmailsResponse>;
    /**
     * API to search for entries of type Boulder Employee Salaries
    **/
    SearchBoulderEmployeeSalaries(req: operations.SearchBoulderEmployeeSalariesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderEmployeeSalariesResponse>;
    /**
     * API to search for entries of type Calendar
    **/
    SearchCalendar(req: operations.SearchCalendarRequest, config?: AxiosRequestConfig): Promise<operations.SearchCalendarResponse>;
    /**
     * API to search for entries of type Campaign Donors
    **/
    SearchCampaignDonors(req: operations.SearchCampaignDonorsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCampaignDonorsResponse>;
    /**
     * API to search for entries of type Campaign Expenditures
    **/
    SearchCampaignExpenditures(req: operations.SearchCampaignExpendituresRequest, config?: AxiosRequestConfig): Promise<operations.SearchCampaignExpendituresResponse>;
    /**
     * API to search for entries of type Catalog Link
    **/
    SearchCataloglink(req: operations.SearchCataloglinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchCataloglinkResponse>;
    /**
     * API to search for entries of type Gridded Data File
    **/
    SearchCdmGrid(req: operations.SearchCdmGridRequest, config?: AxiosRequestConfig): Promise<operations.SearchCdmGridResponse>;
    /**
     * API to search for entries of type Chat Room
    **/
    SearchChatroom(req: operations.SearchChatroomRequest, config?: AxiosRequestConfig): Promise<operations.SearchChatroomResponse>;
    /**
     * API to search for entries of type Colorado Water Rights
    **/
    SearchColoradoWaterRights(req: operations.SearchColoradoWaterRightsRequest, config?: AxiosRequestConfig): Promise<operations.SearchColoradoWaterRightsResponse>;
    /**
     * API to search for entries of type Committee Donations
    **/
    SearchCommitteeDonations(req: operations.SearchCommitteeDonationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommitteeDonationsResponse>;
    /**
     * API to search for entries of type Data Hub
    **/
    SearchCommunityDatahub(req: operations.SearchCommunityDatahubRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommunityDatahubResponse>;
    /**
     * API to search for entries of type Facility
    **/
    SearchCommunityResource(req: operations.SearchCommunityResourceRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommunityResourceResponse>;
    /**
     * API to search for entries of type Construction Permits
    **/
    SearchConstructionPermits(req: operations.SearchConstructionPermitsRequest, config?: AxiosRequestConfig): Promise<operations.SearchConstructionPermitsResponse>;
    /**
     * API to search for entries of type Contact List
    **/
    SearchContact(req: operations.SearchContactRequest, config?: AxiosRequestConfig): Promise<operations.SearchContactResponse>;
    /**
     * API to search for entries of type Colorado Health Indicators
    **/
    SearchDbCoIndicators(req: operations.SearchDbCoIndicatorsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDbCoIndicatorsResponse>;
    /**
     * API to search for entries of type Landsat Satellite Data
    **/
    SearchEarthSatelliteLandsat(req: operations.SearchEarthSatelliteLandsatRequest, config?: AxiosRequestConfig): Promise<operations.SearchEarthSatelliteLandsatResponse>;
    /**
     * API to search for entries of type FAQ
    **/
    SearchFaq(req: operations.SearchFaqRequest, config?: AxiosRequestConfig): Promise<operations.SearchFaqResponse>;
    /**
     * API to search for entries of type FEC PACs
    **/
    SearchFecPacs(req: operations.SearchFecPacsRequest, config?: AxiosRequestConfig): Promise<operations.SearchFecPacsResponse>;
    /**
     * API to search for entries of type Candidates
    **/
    SearchFeccandidates(req: operations.SearchFeccandidatesRequest, config?: AxiosRequestConfig): Promise<operations.SearchFeccandidatesResponse>;
    /**
     * API to search for entries of type RSS/ATOM Feed
    **/
    SearchFeed(req: operations.SearchFeedRequest, config?: AxiosRequestConfig): Promise<operations.SearchFeedResponse>;
    /**
     * API to search for entries of type File
    **/
    SearchFile(req: operations.SearchFileRequest, config?: AxiosRequestConfig): Promise<operations.SearchFileResponse>;
    /**
     * API to search for entries of type FITS Data File
    **/
    SearchFitsData(req: operations.SearchFitsDataRequest, config?: AxiosRequestConfig): Promise<operations.SearchFitsDataResponse>;
    /**
     * API to search for entries of type Remote FTP File View
    **/
    SearchFtp(req: operations.SearchFtpRequest, config?: AxiosRequestConfig): Promise<operations.SearchFtpResponse>;
    /**
     * API to search for entries of type Countdown
    **/
    SearchGadgetsCountdown(req: operations.SearchGadgetsCountdownRequest, config?: AxiosRequestConfig): Promise<operations.SearchGadgetsCountdownResponse>;
    /**
     * API to search for entries of type Stock Ticker
    **/
    SearchGadgetsStock(req: operations.SearchGadgetsStockRequest, config?: AxiosRequestConfig): Promise<operations.SearchGadgetsStockResponse>;
    /**
     * API to search for entries of type Weather
    **/
    SearchGadgetsWeather(req: operations.SearchGadgetsWeatherRequest, config?: AxiosRequestConfig): Promise<operations.SearchGadgetsWeatherResponse>;
    /**
     * API to search for entries of type Census Tracts
    **/
    SearchGazeteerCensusTracts(req: operations.SearchGazeteerCensusTractsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGazeteerCensusTractsResponse>;
    /**
     * API to search for entries of type Census Gazeteer Counties
    **/
    SearchGazeteerCounties(req: operations.SearchGazeteerCountiesRequest, config?: AxiosRequestConfig): Promise<operations.SearchGazeteerCountiesResponse>;
    /**
     * API to search for entries of type GeoJson File
    **/
    SearchGeoGeojson(req: operations.SearchGeoGeojsonRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoGeojsonResponse>;
    /**
     * API to search for entries of type GeoTIFF
    **/
    SearchGeoGeotiff(req: operations.SearchGeoGeotiffRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoGeotiffResponse>;
    /**
     * API to search for entries of type GPX GPS File
    **/
    SearchGeoGpx(req: operations.SearchGeoGpxRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoGpxResponse>;
    /**
     * API to search for entries of type HDF5 File
    **/
    SearchGeoHdf5(req: operations.SearchGeoHdf5Request, config?: AxiosRequestConfig): Promise<operations.SearchGeoHdf5Response>;
    /**
     * API to search for entries of type KML/KMZ File
    **/
    SearchGeoKml(req: operations.SearchGeoKmlRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoKmlResponse>;
    /**
     * API to search for entries of type Shapefile
    **/
    SearchGeoShapefile(req: operations.SearchGeoShapefileRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoShapefileResponse>;
    /**
     * API to search for entries of type Shapefile with FIPS Code
    **/
    SearchGeoShapefileFips(req: operations.SearchGeoShapefileFipsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoShapefileFipsResponse>;
    /**
     * API to search for entries of type Glossary
    **/
    SearchGlossary(req: operations.SearchGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.SearchGlossaryResponse>;
    /**
     * API to search for entries of type Grid Aggregation
    **/
    SearchGridaggregation(req: operations.SearchGridaggregationRequest, config?: AxiosRequestConfig): Promise<operations.SearchGridaggregationResponse>;
    /**
     * API to search for entries of type Folder
    **/
    SearchGroup(req: operations.SearchGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchGroupResponse>;
    /**
     * API to search for entries of type HipChat Group
    **/
    SearchHipchatGroup(req: operations.SearchHipchatGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchHipchatGroupResponse>;
    /**
     * API to search for entries of type Home Page
    **/
    SearchHomepage(req: operations.SearchHomepageRequest, config?: AxiosRequestConfig): Promise<operations.SearchHomepageResponse>;
    /**
     * API to search for entries of type Incident
    **/
    SearchIncident(req: operations.SearchIncidentRequest, config?: AxiosRequestConfig): Promise<operations.SearchIncidentResponse>;
    /**
     * API to search for entries of type Jeopardy
    **/
    SearchJeopardy(req: operations.SearchJeopardyRequest, config?: AxiosRequestConfig): Promise<operations.SearchJeopardyResponse>;
    /**
     * API to search for entries of type Lat-Lon Image
    **/
    SearchLatlonimage(req: operations.SearchLatlonimageRequest, config?: AxiosRequestConfig): Promise<operations.SearchLatlonimageResponse>;
    /**
     * API to search for entries of type LiDAR Collection
    **/
    SearchLidarCollection(req: operations.SearchLidarCollectionRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarCollectionResponse>;
    /**
     * API to search for entries of type LAS Lidar Data
    **/
    SearchLidarLas(req: operations.SearchLidarLasRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarLasResponse>;
    /**
     * API to search for entries of type LVIS Lidar Data
    **/
    SearchLidarLvis(req: operations.SearchLidarLvisRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarLvisResponse>;
    /**
     * API to search for entries of type Link
    **/
    SearchLink(req: operations.SearchLinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchLinkResponse>;
    /**
     * API to search for entries of type Server Side Files
    **/
    SearchLocalfiles(req: operations.SearchLocalfilesRequest, config?: AxiosRequestConfig): Promise<operations.SearchLocalfilesResponse>;
    /**
     * API to search for entries of type Locations
    **/
    SearchLocations(req: operations.SearchLocationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchLocationsResponse>;
    /**
     * API to search for entries of type Google Map URL
    **/
    SearchMapGooglemap(req: operations.SearchMapGooglemapRequest, config?: AxiosRequestConfig): Promise<operations.SearchMapGooglemapResponse>;
    /**
     * API to search for entries of type Audio File
    **/
    SearchMediaAudiofile(req: operations.SearchMediaAudiofileRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaAudiofileResponse>;
    /**
     * API to search for entries of type Image Loop
    **/
    SearchMediaImageloop(req: operations.SearchMediaImageloopRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaImageloopResponse>;
    /**
     * API to search for entries of type Photo Album
    **/
    SearchMediaPhotoalbum(req: operations.SearchMediaPhotoalbumRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaPhotoalbumResponse>;
    /**
     * API to search for entries of type Video Channel
    **/
    SearchMediaVideoChannel(req: operations.SearchMediaVideoChannelRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaVideoChannelResponse>;
    /**
     * API to search for entries of type Quicktime Video
    **/
    SearchMediaVideoQuicktime(req: operations.SearchMediaVideoQuicktimeRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaVideoQuicktimeResponse>;
    /**
     * API to search for entries of type YouTube Video
    **/
    SearchMediaYoutubevideo(req: operations.SearchMediaYoutubevideoRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaYoutubevideoResponse>;
    /**
     * API to search for entries of type Notes
    **/
    SearchNotes(req: operations.SearchNotesRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesResponse>;
    /**
     * API to search for entries of type Json File
    **/
    SearchNotesJsonfile(req: operations.SearchNotesJsonfileRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesJsonfileResponse>;
    /**
     * API to search for entries of type Note
    **/
    SearchNotesNote(req: operations.SearchNotesNoteRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesNoteResponse>;
    /**
     * API to search for entries of type Notebook
    **/
    SearchNotesNotebook(req: operations.SearchNotesNotebookRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesNotebookResponse>;
    /**
     * API to search for entries of type NWS Forecast Feed
    **/
    SearchNwsfeed(req: operations.SearchNwsfeedRequest, config?: AxiosRequestConfig): Promise<operations.SearchNwsfeedResponse>;
    /**
     * API to search for entries of type OPeNDAP Link
    **/
    SearchOpendaplink(req: operations.SearchOpendaplinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchOpendaplinkResponse>;
    /**
     * API to search for entries of type OWL Class
    **/
    SearchOwlClass(req: operations.SearchOwlClassRequest, config?: AxiosRequestConfig): Promise<operations.SearchOwlClassResponse>;
    /**
     * API to search for entries of type OWL Ontology
    **/
    SearchOwlOntology(req: operations.SearchOwlOntologyRequest, config?: AxiosRequestConfig): Promise<operations.SearchOwlOntologyResponse>;
    /**
     * API to search for entries of type Paste Text Entry
    **/
    SearchPasteitentry(req: operations.SearchPasteitentryRequest, config?: AxiosRequestConfig): Promise<operations.SearchPasteitentryResponse>;
    /**
     * API to search for entries of type Text Point Data
    **/
    SearchPointText(req: operations.SearchPointTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchPointTextResponse>;
    /**
     * API to search for entries of type Police Stop Data
    **/
    SearchPoliceStopData(req: operations.SearchPoliceStopDataRequest, config?: AxiosRequestConfig): Promise<operations.SearchPoliceStopDataResponse>;
    /**
     * API to search for entries of type Poll
    **/
    SearchPoll(req: operations.SearchPollRequest, config?: AxiosRequestConfig): Promise<operations.SearchPollResponse>;
    /**
     * API to search for entries of type Campaign
    **/
    SearchProjectCampaign(req: operations.SearchProjectCampaignRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectCampaignResponse>;
    /**
     * API to search for entries of type Case Study
    **/
    SearchProjectCasestudy(req: operations.SearchProjectCasestudyRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectCasestudyResponse>;
    /**
     * API to search for entries of type Research Contribution
    **/
    SearchProjectContribution(req: operations.SearchProjectContributionRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectContributionResponse>;
    /**
     * API to search for entries of type Data Format
    **/
    SearchProjectDataformat(req: operations.SearchProjectDataformatRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectDataformatResponse>;
    /**
     * API to search for entries of type Dataset
    **/
    SearchProjectDataset(req: operations.SearchProjectDatasetRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectDatasetResponse>;
    /**
     * API to search for entries of type Deployment
    **/
    SearchProjectDeployment(req: operations.SearchProjectDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectDeploymentResponse>;
    /**
     * API to search for entries of type Experiment
    **/
    SearchProjectExperiment(req: operations.SearchProjectExperimentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectExperimentResponse>;
    /**
     * API to search for entries of type Field Note
    **/
    SearchProjectFieldnote(req: operations.SearchProjectFieldnoteRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectFieldnoteResponse>;
    /**
     * API to search for entries of type Control Points File
    **/
    SearchProjectGpsControlpoints(req: operations.SearchProjectGpsControlpointsRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsControlpointsResponse>;
    /**
     * API to search for entries of type Raw GPS File
    **/
    SearchProjectGpsRaw(req: operations.SearchProjectGpsRawRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsRawResponse>;
    /**
     * API to search for entries of type RINEX File
    **/
    SearchProjectGpsRinex(req: operations.SearchProjectGpsRinexRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsRinexResponse>;
    /**
     * API to search for entries of type Instrument Data Collection
    **/
    SearchProjectInstrument(req: operations.SearchProjectInstrumentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectInstrumentResponse>;
    /**
     * API to search for entries of type Teaching Resource
    **/
    SearchProjectLearningResource(req: operations.SearchProjectLearningResourceRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectLearningResourceResponse>;
    /**
     * API to search for entries of type Meeting
    **/
    SearchProjectMeeting(req: operations.SearchProjectMeetingRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectMeetingResponse>;
    /**
     * API to search for entries of type Organization
    **/
    SearchProjectOrganization(req: operations.SearchProjectOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectOrganizationResponse>;
    /**
     * API to search for entries of type Program
    **/
    SearchProjectProgram(req: operations.SearchProjectProgramRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectProgramResponse>;
    /**
     * API to search for entries of type Project
    **/
    SearchProjectProject(req: operations.SearchProjectProjectRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectProjectResponse>;
    /**
     * API to search for entries of type Data Access Service
    **/
    SearchProjectService(req: operations.SearchProjectServiceRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectServiceResponse>;
    /**
     * API to search for entries of type Site
    **/
    SearchProjectSite(req: operations.SearchProjectSiteRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSiteResponse>;
    /**
     * API to search for entries of type Software Tool
    **/
    SearchProjectSoftwarepackage(req: operations.SearchProjectSoftwarepackageRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSoftwarepackageResponse>;
    /**
     * API to search for entries of type Standard Parameter Name
    **/
    SearchProjectStandardName(req: operations.SearchProjectStandardNameRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectStandardNameResponse>;
    /**
     * API to search for entries of type Survey Location
    **/
    SearchProjectSurveylocation(req: operations.SearchProjectSurveylocationRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSurveylocationResponse>;
    /**
     * API to search for entries of type Vocabulary Term
    **/
    SearchProjectTerm(req: operations.SearchProjectTermRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectTermResponse>;
    /**
     * API to search for entries of type Site Visit
    **/
    SearchProjectVisit(req: operations.SearchProjectVisitRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectVisitResponse>;
    /**
     * API to search for entries of type Vocabulary
    **/
    SearchProjectVocabulary(req: operations.SearchProjectVocabularyRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectVocabularyResponse>;
    /**
     * API to search for entries of type Property Sales
    **/
    SearchPropertySales(req: operations.SearchPropertySalesRequest, config?: AxiosRequestConfig): Promise<operations.SearchPropertySalesResponse>;
    /**
     * API to search for entries of type Property Database
    **/
    SearchPropertydb(req: operations.SearchPropertydbRequest, config?: AxiosRequestConfig): Promise<operations.SearchPropertydbResponse>;
    /**
     * API to search for entries of type IPython Notebook file
    **/
    SearchPythonNotebook(req: operations.SearchPythonNotebookRequest, config?: AxiosRequestConfig): Promise<operations.SearchPythonNotebookResponse>;
    /**
     * API to search for entries of type Slack Team
    **/
    SearchSlackTeam(req: operations.SearchSlackTeamRequest, config?: AxiosRequestConfig): Promise<operations.SearchSlackTeamResponse>;
    /**
     * API to search for entries of type Status Board
    **/
    SearchStatusboard(req: operations.SearchStatusboardRequest, config?: AxiosRequestConfig): Promise<operations.SearchStatusboardResponse>;
    /**
     * API to search for entries of type Sunrise/Sunset Display
    **/
    SearchSunrisesunset(req: operations.SearchSunrisesunsetRequest, config?: AxiosRequestConfig): Promise<operations.SearchSunrisesunsetResponse>;
    /**
     * API to search for entries of type Tasks
    **/
    SearchTasks(req: operations.SearchTasksRequest, config?: AxiosRequestConfig): Promise<operations.SearchTasksResponse>;
    /**
     * API to search for entries of type Tmdb Movies
    **/
    SearchTmdbmovies(req: operations.SearchTmdbmoviesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTmdbmoviesResponse>;
    /**
     * API to search for entries of type Todo
    **/
    SearchTodo(req: operations.SearchTodoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTodoResponse>;
    /**
     * API to search for entries of type Event
    **/
    SearchTripEvent(req: operations.SearchTripEventRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripEventResponse>;
    /**
     * API to search for entries of type Flight Leg
    **/
    SearchTripFlight(req: operations.SearchTripFlightRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripFlightResponse>;
    /**
     * API to search for entries of type Lodging
    **/
    SearchTripHotel(req: operations.SearchTripHotelRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripHotelResponse>;
    /**
     * API to search for entries of type Trip Report
    **/
    SearchTripReport(req: operations.SearchTripReportRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripReportResponse>;
    /**
     * API to search for entries of type Trip
    **/
    SearchTripTrip(req: operations.SearchTripTripRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripTripResponse>;
    /**
     * API to search for entries of type AWC Weather Observations
    **/
    SearchTypeAwcMetar(req: operations.SearchTypeAwcMetarRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeAwcMetarResponse>;
    /**
     * API to search for entries of type Stock Ticker Data
    **/
    SearchTypeBizStockseries(req: operations.SearchTypeBizStockseriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeBizStockseriesResponse>;
    /**
     * API to search for entries of type BLS Series
    **/
    SearchTypeBlsSeries(req: operations.SearchTypeBlsSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeBlsSeriesResponse>;
    /**
     * API to search for entries of type BLS Survey
    **/
    SearchTypeBlsSurvey(req: operations.SearchTypeBlsSurveyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeBlsSurveyResponse>;
    /**
     * API to search for entries of type US Census ACS Data
    **/
    SearchTypeCensusAcs(req: operations.SearchTypeCensusAcsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeCensusAcsResponse>;
    /**
     * API to search for entries of type Daymet Daily Weather
    **/
    SearchTypeDaymet(req: operations.SearchTypeDaymetRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDaymetResponse>;
    /**
     * API to search for entries of type Database Table
    **/
    SearchTypeDbTable(req: operations.SearchTypeDbTableRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDbTableResponse>;
    /**
     * API to search for entries of type CSV File
    **/
    SearchTypeDocumentCsv(req: operations.SearchTypeDocumentCsvRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentCsvResponse>;
    /**
     * API to search for entries of type Word File
    **/
    SearchTypeDocumentDoc(req: operations.SearchTypeDocumentDocRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentDocResponse>;
    /**
     * API to search for entries of type HTML File
    **/
    SearchTypeDocumentHtml(req: operations.SearchTypeDocumentHtmlRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentHtmlResponse>;
    /**
     * API to search for entries of type PDF File
    **/
    SearchTypeDocumentPdf(req: operations.SearchTypeDocumentPdfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentPdfResponse>;
    /**
     * API to search for entries of type Powerpoint File
    **/
    SearchTypeDocumentPpt(req: operations.SearchTypeDocumentPptRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentPptResponse>;
    /**
     * API to search for entries of type Excel File
    **/
    SearchTypeDocumentXls(req: operations.SearchTypeDocumentXlsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentXlsResponse>;
    /**
     * API to search for entries of type Drilsdown Case Study
    **/
    SearchTypeDrilsdownCasestudy(req: operations.SearchTypeDrilsdownCasestudyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDrilsdownCasestudyResponse>;
    /**
     * API to search for entries of type SEC EDGAR Filing
    **/
    SearchTypeEdgarFiling(req: operations.SearchTypeEdgarFilingRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEdgarFilingResponse>;
    /**
     * API to search for entries of type EIA Category
    **/
    SearchTypeEiaCategory(req: operations.SearchTypeEiaCategoryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEiaCategoryResponse>;
    /**
     * API to search for entries of type EIA Series
    **/
    SearchTypeEiaSeries(req: operations.SearchTypeEiaSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEiaSeriesResponse>;
    /**
     * API to search for entries of type ESRI Feature Server
    **/
    SearchTypeEsriFeatureserver(req: operations.SearchTypeEsriFeatureserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriFeatureserverResponse>;
    /**
     * API to search for entries of type ESRI Geometry Server
    **/
    SearchTypeEsriGeometryserver(req: operations.SearchTypeEsriGeometryserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriGeometryserverResponse>;
    /**
     * API to search for entries of type ESRI GP Server
    **/
    SearchTypeEsriGpserver(req: operations.SearchTypeEsriGpserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriGpserverResponse>;
    /**
     * API to search for entries of type ESRI Image Server
    **/
    SearchTypeEsriImageserver(req: operations.SearchTypeEsriImageserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriImageserverResponse>;
    /**
     * API to search for entries of type ESRI Layer
    **/
    SearchTypeEsriLayer(req: operations.SearchTypeEsriLayerRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriLayerResponse>;
    /**
     * API to search for entries of type ESRI Map Server
    **/
    SearchTypeEsriMapserver(req: operations.SearchTypeEsriMapserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriMapserverResponse>;
    /**
     * API to search for entries of type ESRI Services Folder
    **/
    SearchTypeEsriRestfolder(req: operations.SearchTypeEsriRestfolderRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriRestfolderResponse>;
    /**
     * API to search for entries of type ESRI Web Server
    **/
    SearchTypeEsriRestserver(req: operations.SearchTypeEsriRestserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriRestserverResponse>;
    /**
     * API to search for entries of type ESRI Rest Service
    **/
    SearchTypeEsriRestservice(req: operations.SearchTypeEsriRestserviceRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriRestserviceResponse>;
    /**
     * API to search for entries of type NOAA Extremes Data
    **/
    SearchTypeExtremes(req: operations.SearchTypeExtremesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeExtremesResponse>;
    /**
     * API to search for entries of type FRED Category
    **/
    SearchTypeFredCategory(req: operations.SearchTypeFredCategoryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeFredCategoryResponse>;
    /**
     * API to search for entries of type FRED Series
    **/
    SearchTypeFredSeries(req: operations.SearchTypeFredSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeFredSeriesResponse>;
    /**
     * API to search for entries of type Transit Agency
    **/
    SearchTypeGtfsAgency(req: operations.SearchTypeGtfsAgencyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsAgencyResponse>;
    /**
     * API to search for entries of type Transit Route
    **/
    SearchTypeGtfsRoute(req: operations.SearchTypeGtfsRouteRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsRouteResponse>;
    /**
     * API to search for entries of type Transit Route Collection
    **/
    SearchTypeGtfsRoutes(req: operations.SearchTypeGtfsRoutesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsRoutesResponse>;
    /**
     * API to search for entries of type Transit Stop
    **/
    SearchTypeGtfsStop(req: operations.SearchTypeGtfsStopRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsStopResponse>;
    /**
     * API to search for entries of type Transit Stop Collection
    **/
    SearchTypeGtfsStops(req: operations.SearchTypeGtfsStopsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsStopsResponse>;
    /**
     * API to search for entries of type Transit Trip
    **/
    SearchTypeGtfsTrip(req: operations.SearchTypeGtfsTripRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsTripResponse>;
    /**
     * API to search for entries of type Hazard Data
    **/
    SearchTypeHazarddata(req: operations.SearchTypeHazarddataRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeHazarddataResponse>;
    /**
     * API to search for entries of type Colorado DNR Stream Gage
    **/
    SearchTypeHydroColorado(req: operations.SearchTypeHydroColoradoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeHydroColoradoResponse>;
    /**
     * API to search for entries of type IDV Bundle
    **/
    SearchTypeIdvBundle(req: operations.SearchTypeIdvBundleRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeIdvBundleResponse>;
    /**
     * API to search for entries of type Image
    **/
    SearchTypeImage(req: operations.SearchTypeImageRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeImageResponse>;
    /**
     * API to search for entries of type Airport Image
    **/
    SearchTypeImageAirport(req: operations.SearchTypeImageAirportRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeImageAirportResponse>;
    /**
     * API to search for entries of type Webcam
    **/
    SearchTypeImageWebcam(req: operations.SearchTypeImageWebcamRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeImageWebcamResponse>;
    /**
     * API to search for entries of type MB Bathymetry
    **/
    SearchTypeMb(req: operations.SearchTypeMbRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbResponse>;
    /**
     * API to search for entries of type Bathymetry Collection
    **/
    SearchTypeMbCollection(req: operations.SearchTypeMbCollectionRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbCollectionResponse>;
    /**
     * API to search for entries of type Basic MB point file
    **/
    SearchTypeMbPointBasic(req: operations.SearchTypeMbPointBasicRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbPointBasicResponse>;
    /**
     * API to search for entries of type Metadata Dictionary
    **/
    SearchTypeMetametaDictionary(req: operations.SearchTypeMetametaDictionaryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMetametaDictionaryResponse>;
    /**
     * API to search for entries of type Metadata Field
    **/
    SearchTypeMetametaField(req: operations.SearchTypeMetametaFieldRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMetametaFieldResponse>;
    /**
     * API to search for entries of type NASA AMES File
    **/
    SearchTypeNasaames(req: operations.SearchTypeNasaamesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNasaamesResponse>;
    /**
     * API to search for entries of type NetCDF Point Subset
    **/
    SearchTypeNcss(req: operations.SearchTypeNcssRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNcssResponse>;
    /**
     * API to search for entries of type NITF File
    **/
    SearchTypeNitf(req: operations.SearchTypeNitfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNitfResponse>;
    /**
     * API to search for entries of type Ameriflux Level 2 CSV File
    **/
    SearchTypePointAmerifluxLevel2(req: operations.SearchTypePointAmerifluxLevel2Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointAmerifluxLevel2Response>;
    /**
     * API to search for entries of type AMRC Final QC Data
    **/
    SearchTypePointAmrcFinal(req: operations.SearchTypePointAmrcFinalRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointAmrcFinalResponse>;
    /**
     * API to search for entries of type AMRC Freewave  Data
    **/
    SearchTypePointAmrcFreewave(req: operations.SearchTypePointAmrcFreewaveRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointAmrcFreewaveResponse>;
    /**
     * API to search for entries of type CZO Display File Format
    **/
    SearchTypePointCzo(req: operations.SearchTypePointCzoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointCzoResponse>;
    /**
     * API to search for entries of type GC-Net Point Data
    **/
    SearchTypePointGcnet(req: operations.SearchTypePointGcnetRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointGcnetResponse>;
    /**
     * API to search for entries of type IAGA 2002 Geomagnetism Data
    **/
    SearchTypePointGeomagIaga2002(req: operations.SearchTypePointGeomagIaga2002Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointGeomagIaga2002Response>;
    /**
     * API to search for entries of type WaterML
    **/
    SearchTypePointHydroWaterml(req: operations.SearchTypePointHydroWatermlRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointHydroWatermlResponse>;
    /**
     * API to search for entries of type ATM Ice SSN Data
    **/
    SearchTypePointIcebridgeAtmIcessn(req: operations.SearchTypePointIcebridgeAtmIcessnRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeAtmIcessnResponse>;
    /**
     * API to search for entries of type ATM QFIT Data
    **/
    SearchTypePointIcebridgeAtmQfit(req: operations.SearchTypePointIcebridgeAtmQfitRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeAtmQfitResponse>;
    /**
     * API to search for entries of type McCords Irmcr2 Data
    **/
    SearchTypePointIcebridgeMccordsIrmcr2(req: operations.SearchTypePointIcebridgeMccordsIrmcr2Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeMccordsIrmcr2Response>;
    /**
     * API to search for entries of type McCords Irmcr3 Data
    **/
    SearchTypePointIcebridgeMccordsIrmcr3(req: operations.SearchTypePointIcebridgeMccordsIrmcr3Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeMccordsIrmcr3Response>;
    /**
     * API to search for entries of type Paris Data
    **/
    SearchTypePointIcebridgeParis(req: operations.SearchTypePointIcebridgeParisRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeParisResponse>;
    /**
     * API to search for entries of type IDV Point File
    **/
    SearchTypePointIdv(req: operations.SearchTypePointIdvRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIdvResponse>;
    /**
     * API to search for entries of type Inline Point File
    **/
    SearchTypePointInline(req: operations.SearchTypePointInlineRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointInlineResponse>;
    /**
     * API to search for entries of type NC  DC Climate Data
    **/
    SearchTypePointNcdcClimate(req: operations.SearchTypePointNcdcClimateRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNcdcClimateResponse>;
    /**
     * API to search for entries of type NetCDF Point File
    **/
    SearchTypePointNetcdf(req: operations.SearchTypePointNetcdfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNetcdfResponse>;
    /**
     * API to search for entries of type NOAA Carbon Measurements
    **/
    SearchTypePointNoaaCarbon(req: operations.SearchTypePointNoaaCarbonRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaCarbonResponse>;
    /**
     * API to search for entries of type NOAA Flask Event Measurements
    **/
    SearchTypePointNoaaFlaskEvent(req: operations.SearchTypePointNoaaFlaskEventRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaFlaskEventResponse>;
    /**
     * API to search for entries of type NOAA Flask Month Measurements
    **/
    SearchTypePointNoaaFlaskMonth(req: operations.SearchTypePointNoaaFlaskMonthRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaFlaskMonthResponse>;
    /**
     * API to search for entries of type NOAA MADIS Point Data
    **/
    SearchTypePointNoaaMadis(req: operations.SearchTypePointNoaaMadisRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaMadisResponse>;
    /**
     * API to search for entries of type NOAA Tower Network
    **/
    SearchTypePointNoaaTower(req: operations.SearchTypePointNoaaTowerRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaTowerResponse>;
    /**
     * API to search for entries of type SeaBird CNV Data
    **/
    SearchTypePointOceanCnv(req: operations.SearchTypePointOceanCnvRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCnvResponse>;
    /**
     * API to search for entries of type SADO TTS Data
    **/
    SearchTypePointOceanCsvSadoTts(req: operations.SearchTypePointOceanCsvSadoTtsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCsvSadoTtsResponse>;
    /**
     * API to search for entries of type SADO Meteo Data
    **/
    SearchTypePointOceanCsvSadoMeteo(req: operations.SearchTypePointOceanCsvSadoMeteoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCsvSadoMeteoResponse>;
    /**
     * API to search for entries of type SADO Position Data
    **/
    SearchTypePointOceanCsvSadoPosition(req: operations.SearchTypePointOceanCsvSadoPositionRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCsvSadoPositionResponse>;
    /**
     * API to search for entries of type NetCDF Glider Data
    **/
    SearchTypePointOceanNetcdfGlider(req: operations.SearchTypePointOceanNetcdfGliderRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanNetcdfGliderResponse>;
    /**
     * API to search for entries of type NetCDF Track Data
    **/
    SearchTypePointOceanNetcdfTrack(req: operations.SearchTypePointOceanNetcdfTrackRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanNetcdfTrackResponse>;
    /**
     * API to search for entries of type OOI Data
    **/
    SearchTypePointOceanOoiDmgx(req: operations.SearchTypePointOceanOoiDmgxRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanOoiDmgxResponse>;
    /**
     * API to search for entries of type Open AQ Air Quality
    **/
    SearchTypePointOpenaq(req: operations.SearchTypePointOpenaqRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOpenaqResponse>;
    /**
     * API to search for entries of type PBO Position Time Series
    **/
    SearchTypePointPboPositionTimeSeries(req: operations.SearchTypePointPboPositionTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointPboPositionTimeSeriesResponse>;
    /**
     * API to search for entries of type Simple Records
    **/
    SearchTypePointSimpleRecords(req: operations.SearchTypePointSimpleRecordsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointSimpleRecordsResponse>;
    /**
     * API to search for entries of type SNOTEL Snow Data
    **/
    SearchTypePointSnotel(req: operations.SearchTypePointSnotelRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointSnotelResponse>;
    /**
     * API to search for entries of type Record Text File
    **/
    SearchTypePointText(req: operations.SearchTypePointTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointTextResponse>;
    /**
     * API to search for entries of type Global Geodynamics GGP Format
    **/
    SearchTypePointWsbbGgp(req: operations.SearchTypePointWsbbGgpRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointWsbbGgpResponse>;
    /**
     * API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index
    **/
    SearchTypePsdMonthlyClimateIndex(req: operations.SearchTypePsdMonthlyClimateIndexRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePsdMonthlyClimateIndexResponse>;
    /**
     * API to search for entries of type QUANDL Series
    **/
    SearchTypeQuandlSeries(req: operations.SearchTypeQuandlSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeQuandlSeriesResponse>;
    /**
     * API to search for entries of type Service Group
    **/
    SearchTypeServiceGroup(req: operations.SearchTypeServiceGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeServiceGroupResponse>;
    /**
     * API to search for entries of type Service Link
    **/
    SearchTypeServiceLink(req: operations.SearchTypeServiceLinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeServiceLinkResponse>;
    /**
     * API to search for entries of type SOCRATA Series
    **/
    SearchTypeSocrataSeries(req: operations.SearchTypeSocrataSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSocrataSeriesResponse>;
    /**
     * API to search for entries of type COD Sounding
    **/
    SearchTypeSoundingCod(req: operations.SearchTypeSoundingCodRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingCodResponse>;
    /**
     * API to search for entries of type FRD Sounding
    **/
    SearchTypeSoundingFrd(req: operations.SearchTypeSoundingFrdRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingFrdResponse>;
    /**
     * API to search for entries of type GSD Sounding
    **/
    SearchTypeSoundingGsd(req: operations.SearchTypeSoundingGsdRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingGsdResponse>;
    /**
     * API to search for entries of type UW Sounding
    **/
    SearchTypeSoundingWyoming(req: operations.SearchTypeSoundingWyomingRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingWyomingResponse>;
    /**
     * API to search for entries of type NREL TMY Data
    **/
    SearchTypeTmy(req: operations.SearchTypeTmyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeTmyResponse>;
    /**
     * API to search for entries of type Tweet
    **/
    SearchTypeTweet(req: operations.SearchTypeTweetRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeTweetResponse>;
    /**
     * API to search for entries of type USGS Stream Gauge
    **/
    SearchTypeUsgsGauge(req: operations.SearchTypeUsgsGaugeRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeUsgsGaugeResponse>;
    /**
     * API to search for entries of type Virtual Group
    **/
    SearchTypeVirtual(req: operations.SearchTypeVirtualRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeVirtualResponse>;
    /**
     * API to search for entries of type WMS Capabilities
    **/
    SearchTypeWmsCapabilities(req: operations.SearchTypeWmsCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeWmsCapabilitiesResponse>;
    /**
     * API to search for entries of type WMS Layer
    **/
    SearchTypeWmsLayer(req: operations.SearchTypeWmsLayerRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeWmsLayerResponse>;
    /**
     * API to search for entries of type Ufo Sightings
    **/
    SearchUfoSightings(req: operations.SearchUfoSightingsRequest, config?: AxiosRequestConfig): Promise<operations.SearchUfoSightingsResponse>;
    /**
     * API to search for entries of type US Places
    **/
    SearchUsPlaces(req: operations.SearchUsPlacesRequest, config?: AxiosRequestConfig): Promise<operations.SearchUsPlacesResponse>;
    /**
     * API to search for entries of type Simple Yes-No Vote
    **/
    SearchVoteYesno(req: operations.SearchVoteYesnoRequest, config?: AxiosRequestConfig): Promise<operations.SearchVoteYesnoResponse>;
    /**
     * API to search for entries of type Weblog
    **/
    SearchWeblog(req: operations.SearchWeblogRequest, config?: AxiosRequestConfig): Promise<operations.SearchWeblogResponse>;
    /**
     * API to search for entries of type Wiki Page
    **/
    SearchWikipage(req: operations.SearchWikipageRequest, config?: AxiosRequestConfig): Promise<operations.SearchWikipageResponse>;
}
export {};
