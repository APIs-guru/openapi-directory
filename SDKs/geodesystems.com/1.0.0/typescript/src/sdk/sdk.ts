import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ServiceMediaTabularExtractsheet } from "./servicemediatabularextractsheet";
import { Type2017BoulderElectionExpenditures } from "./type2017boulderelectionexpenditures";
import { TypeAny } from "./typeany";
import { TypeBeforeafter } from "./typebeforeafter";
import { TypeBiblio } from "./typebiblio";
import { TypeBioDicom } from "./typebiodicom";
import { TypeBioDicomTest } from "./typebiodicomtest";
import { TypeBioFasta } from "./typebiofasta";
import { TypeBioFastq } from "./typebiofastq";
import { TypeBioHmmerIndex } from "./typebiohmmerindex";
import { TypeBioOmeTiff } from "./typebioometiff";
import { TypeBioOntologyAssay } from "./typebioontologyassay";
import { TypeBioOntologyCohort } from "./typebioontologycohort";
import { TypeBioOntologyPerson } from "./typebioontologyperson";
import { TypeBioOntologySample } from "./typebioontologysample";
import { TypeBioOntologySeries } from "./typebioontologyseries";
import { TypeBioOntologyStudy } from "./typebioontologystudy";
import { TypeBioSam } from "./typebiosam";
import { TypeBioSfPdb } from "./typebiosfpdb";
import { TypeBioSra } from "./typebiosra";
import { TypeBioStockholm } from "./typebiostockholm";
import { TypeBioTaxonomy } from "./typebiotaxonomy";
import { TypeBlogentry } from "./typeblogentry";
import { TypeBolderRentalHousing } from "./typebolderrentalhousing";
import { TypeBookmarks } from "./typebookmarks";
import { TypeBostonCrime } from "./typebostoncrime";
import { TypeBoulder2017ElectionContributions } from "./typeboulder2017electioncontributions";
import { TypeBoulderCampaignContributions } from "./typebouldercampaigncontributions";
import { TypeBoulderConsultingServices } from "./typeboulderconsultingservices";
import { TypeBoulderCountyVoterDetails } from "./typebouldercountyvoterdetails";
import { TypeBoulderCrimes } from "./typebouldercrimes";
import { TypeBoulderEmails } from "./typeboulderemails";
import { TypeBoulderEmployeeSalaries } from "./typeboulderemployeesalaries";
import { TypeCalendar } from "./typecalendar";
import { TypeCampaignDonors } from "./typecampaigndonors";
import { TypeCampaignExpenditures } from "./typecampaignexpenditures";
import { TypeCataloglink } from "./typecataloglink";
import { TypeCdmGrid } from "./typecdmgrid";
import { TypeChatroom } from "./typechatroom";
import { TypeColoradoWaterRights } from "./typecoloradowaterrights";
import { TypeCommitteeDonations } from "./typecommitteedonations";
import { TypeCommunityDatahub } from "./typecommunitydatahub";
import { TypeCommunityResource } from "./typecommunityresource";
import { TypeConstructionPermits } from "./typeconstructionpermits";
import { TypeContact } from "./typecontact";
import { TypeDbCoIndicators } from "./typedbcoindicators";
import { TypeEarthSatelliteLandsat } from "./typeearthsatellitelandsat";
import { TypeFaq } from "./typefaq";
import { TypeFecPacs } from "./typefecpacs";
import { TypeFeccandidates } from "./typefeccandidates";
import { TypeFeed } from "./typefeed";
import { TypeFile } from "./typefile";
import { TypeFitsData } from "./typefitsdata";
import { TypeFtp } from "./typeftp";
import { TypeGadgetsCountdown } from "./typegadgetscountdown";
import { TypeGadgetsStock } from "./typegadgetsstock";
import { TypeGadgetsWeather } from "./typegadgetsweather";
import { TypeGazeteerCensusTracts } from "./typegazeteercensustracts";
import { TypeGazeteerCounties } from "./typegazeteercounties";
import { TypeGeoGe } from "./typegeoge";
import { TypeGeoGeotiff } from "./typegeogeotiff";
import { TypeGeoGpx } from "./typegeogpx";
import { TypeGeoHdf5 } from "./typegeohdf5";
import { TypeGeoKml } from "./typegeokml";
import { TypeGeoShapefile } from "./typegeoshapefile";
import { TypeGeoShapefileFips } from "./typegeoshapefilefips";
import { TypeGlossary } from "./typeglossary";
import { TypeGridaggregation } from "./typegridaggregation";
import { TypeGroup } from "./typegroup";
import { TypeHipchatGroup } from "./typehipchatgroup";
import { TypeHomepage } from "./typehomepage";
import { TypeIncident } from "./typeincident";
import { TypeJeopardy } from "./typejeopardy";
import { TypeLatlonimage } from "./typelatlonimage";
import { TypeLidarCollection } from "./typelidarcollection";
import { TypeLidarLas } from "./typelidarlas";
import { TypeLidarLvis } from "./typelidarlvis";
import { TypeLink } from "./typelink";
import { TypeLocalfiles } from "./typelocalfiles";
import { TypeLocations } from "./typelocations";
import { TypeMapGooglemap } from "./typemapgooglemap";
import { TypeMediaAudiofile } from "./typemediaaudiofile";
import { TypeMediaImageloop } from "./typemediaimageloop";
import { TypeMediaPhotoalbum } from "./typemediaphotoalbum";
import { TypeMediaVideoChannel } from "./typemediavideochannel";
import { TypeMediaVideoQuicktime } from "./typemediavideoquicktime";
import { TypeMediaYoutubevideo } from "./typemediayoutubevideo";
import { TypeNotes } from "./typenotes";
import { TypeNotesJsonfile } from "./typenotesjsonfile";
import { TypeNotesNote } from "./typenotesnote";
import { TypeNotesNotebook } from "./typenotesnotebook";
import { TypeNwsfeed } from "./typenwsfeed";
import { TypeOpendaplink } from "./typeopendaplink";
import { TypeOwlClass } from "./typeowlclass";
import { TypeOwlOntology } from "./typeowlontology";
import { TypePasteitentry } from "./typepasteitentry";
import { TypePointText } from "./typepointtext";
import { TypePoliceStopData } from "./typepolicestopdata";
import { TypePoll } from "./typepoll";
import { TypeProjectCampaign } from "./typeprojectcampaign";
import { TypeProjectCasestudy } from "./typeprojectcasestudy";
import { TypeProjectContribution } from "./typeprojectcontribution";
import { TypeProjectDataformat } from "./typeprojectdataformat";
import { TypeProjectDataset } from "./typeprojectdataset";
import { TypeProjectDeployment } from "./typeprojectdeployment";
import { TypeProjectExperiment } from "./typeprojectexperiment";
import { TypeProjectFieldnote } from "./typeprojectfieldnote";
import { TypeProjectGpsControlpoints } from "./typeprojectgpscontrolpoints";
import { TypeProjectGpsRaw } from "./typeprojectgpsraw";
import { TypeProjectGpsRinex } from "./typeprojectgpsrinex";
import { TypeProjectInstrument } from "./typeprojectinstrument";
import { TypeProjectLearningResource } from "./typeprojectlearningresource";
import { TypeProjectMeeting } from "./typeprojectmeeting";
import { TypeProjectOrganization } from "./typeprojectorganization";
import { TypeProjectProgram } from "./typeprojectprogram";
import { TypeProjectProject } from "./typeprojectproject";
import { TypeProjectService } from "./typeprojectservice";
import { TypeProjectSite } from "./typeprojectsite";
import { TypeProjectSoftwarepackage } from "./typeprojectsoftwarepackage";
import { TypeProjectStandardName } from "./typeprojectstandardname";
import { TypeProjectSurveylocation } from "./typeprojectsurveylocation";
import { TypeProjectTerm } from "./typeprojectterm";
import { TypeProjectVisit } from "./typeprojectvisit";
import { TypeProjectVocabulary } from "./typeprojectvocabulary";
import { TypePropertySales } from "./typepropertysales";
import { TypePropertydb } from "./typepropertydb";
import { TypePythonNotebook } from "./typepythonnotebook";
import { TypeSlackTeam } from "./typeslackteam";
import { TypeStatusboard } from "./typestatusboard";
import { TypeSunrisesunset } from "./typesunrisesunset";
import { TypeTasks } from "./typetasks";
import { TypeTmdbmovies } from "./typetmdbmovies";
import { TypeTodo } from "./typetodo";
import { TypeTripEvent } from "./typetripevent";
import { TypeTripFlight } from "./typetripflight";
import { TypeTripHotel } from "./typetriphotel";
import { TypeTripReport } from "./typetripreport";
import { TypeTripTrip } from "./typetriptrip";
import { TypeTypeAwcMetar } from "./typetypeawcmetar";
import { TypeTypeBizStockseries } from "./typetypebizstockseries";
import { TypeTypeBlsSeries } from "./typetypeblsseries";
import { TypeTypeBlsSurvey } from "./typetypeblssurvey";
import { TypeTypeCensusAcs } from "./typetypecensusacs";
import { TypeTypeDaymet } from "./typetypedaymet";
import { TypeTypeDbTable } from "./typetypedbtable";
import { TypeTypeDocumentCsv } from "./typetypedocumentcsv";
import { TypeTypeDocumentDoc } from "./typetypedocumentdoc";
import { TypeTypeDocumentHtml } from "./typetypedocumenthtml";
import { TypeTypeDocumentPdf } from "./typetypedocumentpdf";
import { TypeTypeDocumentPpt } from "./typetypedocumentppt";
import { TypeTypeDocumentXls } from "./typetypedocumentxls";
import { TypeTypeDrilsdownCasestudy } from "./typetypedrilsdowncasestudy";
import { TypeTypeEdgarFiling } from "./typetypeedgarfiling";
import { TypeTypeEiaCategory } from "./typetypeeiacategory";
import { TypeTypeEiaSeries } from "./typetypeeiaseries";
import { TypeTypeEsriFeatureserver } from "./typetypeesrifeatureserver";
import { TypeTypeEsriGeometryserver } from "./typetypeesrigeometryserver";
import { TypeTypeEsriGpserver } from "./typetypeesrigpserver";
import { TypeTypeEsriImageserver } from "./typetypeesriimageserver";
import { TypeTypeEsriLayer } from "./typetypeesrilayer";
import { TypeTypeEsriMapserver } from "./typetypeesrimapserver";
import { TypeTypeEsriRestfolder } from "./typetypeesrirestfolder";
import { TypeTypeEsriRestserver } from "./typetypeesrirestserver";
import { TypeTypeEsriRestservice } from "./typetypeesrirestservice";
import { TypeTypeExtremes } from "./typetypeextremes";
import { TypeTypeFredCategory } from "./typetypefredcategory";
import { TypeTypeFredSeries } from "./typetypefredseries";
import { TypeTypeGtfsAgency } from "./typetypegtfsagency";
import { TypeTypeGtfsRoute } from "./typetypegtfsroute";
import { TypeTypeGtfsRoutes } from "./typetypegtfsroutes";
import { TypeTypeGtfsStop } from "./typetypegtfsstop";
import { TypeTypeGtfsStops } from "./typetypegtfsstops";
import { TypeTypeGtfsTrip } from "./typetypegtfstrip";
import { TypeTypeHazarddata } from "./typetypehazarddata";
import { TypeTypeHydroColorado } from "./typetypehydrocolorado";
import { TypeTypeIdvBundle } from "./typetypeidvbundle";
import { TypeTypeImage } from "./typetypeimage";
import { TypeTypeImageAirport } from "./typetypeimageairport";
import { TypeTypeImageWebcam } from "./typetypeimagewebcam";
import { TypeTypeMb } from "./typetypemb";
import { TypeTypeMbCollection } from "./typetypembcollection";
import { TypeTypeMbPointBasic } from "./typetypembpointbasic";
import { TypeTypeMetametaDictionary } from "./typetypemetametadictionary";
import { TypeTypeMetametaField } from "./typetypemetametafield";
import { TypeTypeNasaames } from "./typetypenasaames";
import { TypeTypeNcss } from "./typetypencss";
import { TypeTypeNitf } from "./typetypenitf";
import { TypeTypePointAmerifluxLevel2 } from "./typetypepointamerifluxlevel2";
import { TypeTypePointAmrcFinal } from "./typetypepointamrcfinal";
import { TypeTypePointAmrcFreewave } from "./typetypepointamrcfreewave";
import { TypeTypePointCzo } from "./typetypepointczo";
import { TypeTypePointGcnet } from "./typetypepointgcnet";
import { TypeTypePointGeomagIaga2002 } from "./typetypepointgeomagiaga2002";
import { TypeTypePointHydroWaterml } from "./typetypepointhydrowaterml";
import { TypeTypePointIcebridgeAtmIcessn } from "./typetypepointicebridgeatmicessn";
import { TypeTypePointIcebridgeAtmQfit } from "./typetypepointicebridgeatmqfit";
import { TypeTypePointIcebridgeMccordsIrmcr2 } from "./typetypepointicebridgemccordsirmcr2";
import { TypeTypePointIcebridgeMccordsIrmcr3 } from "./typetypepointicebridgemccordsirmcr3";
import { TypeTypePointIcebridgeParis } from "./typetypepointicebridgeparis";
import { TypeTypePointIdv } from "./typetypepointidv";
import { TypeTypePointInline } from "./typetypepointinline";
import { TypeTypePointNcdcClimate } from "./typetypepointncdcclimate";
import { TypeTypePointNetcdf } from "./typetypepointnetcdf";
import { TypeTypePointNoaaCarbon } from "./typetypepointnoaacarbon";
import { TypeTypePointNoaaFlaskEvent } from "./typetypepointnoaaflaskevent";
import { TypeTypePointNoaaFlaskMonth } from "./typetypepointnoaaflaskmonth";
import { TypeTypePointNoaaMadis } from "./typetypepointnoaamadis";
import { TypeTypePointNoaaTower } from "./typetypepointnoaatower";
import { TypeTypePointOceanCnv } from "./typetypepointoceancnv";
import { TypeTypePointOceanCsvSadoTts } from "./typetypepointoceancsvsadotts";
import { TypeTypePointOceanCsvSadoMeteo } from "./typetypepointoceancsvsadometeo";
import { TypeTypePointOceanCsvSadoPosition } from "./typetypepointoceancsvsadoposition";
import { TypeTypePointOceanNetcdfGlider } from "./typetypepointoceannetcdfglider";
import { TypeTypePointOceanNetcdfTrack } from "./typetypepointoceannetcdftrack";
import { TypeTypePointOceanOoiDmgx } from "./typetypepointoceanooidmgx";
import { TypeTypePointOpenaq } from "./typetypepointopenaq";
import { TypeTypePointPboPositionTimeSeries } from "./typetypepointpbopositiontimeseries";
import { TypeTypePointSimpleRecords } from "./typetypepointsimplerecords";
import { TypeTypePointSnotel } from "./typetypepointsnotel";
import { TypeTypePointText } from "./typetypepointtext";
import { TypeTypePointWsbbGgp } from "./typetypepointwsbbggp";
import { TypeTypePsdMonthlyClimateIndex } from "./typetypepsdmonthlyclimateindex";
import { TypeTypeQuandlSeries } from "./typetypequandlseries";
import { TypeTypeServiceGroup } from "./typetypeservicegroup";
import { TypeTypeServiceLink } from "./typetypeservicelink";
import { TypeTypeSocrataSeries } from "./typetypesocrataseries";
import { TypeTypeSoundingCod } from "./typetypesoundingcod";
import { TypeTypeSoundingFrd } from "./typetypesoundingfrd";
import { TypeTypeSoundingGsd } from "./typetypesoundinggsd";
import { TypeTypeSoundingWyoming } from "./typetypesoundingwyoming";
import { TypeTypeTmy } from "./typetypetmy";
import { TypeTypeTweet } from "./typetypetweet";
import { TypeTypeUsgsGauge } from "./typetypeusgsgauge";
import { TypeTypeVirtual } from "./typetypevirtual";
import { TypeTypeWmsCapabilities } from "./typetypewmscapabilities";
import { TypeTypeWmsLayer } from "./typetypewmslayer";
import { TypeUfoSightings } from "./typeufosightings";
import { TypeUsPlaces } from "./typeusplaces";
import { TypeVoteYesno } from "./typevoteyesno";
import { TypeWeblog } from "./typeweblog";
import { TypeWikipage } from "./typewikipage";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://geodesystems.com:443/",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {
  public serviceMediaTabularExtractsheet: ServiceMediaTabularExtractsheet;
  public type2017BoulderElectionExpenditures: Type2017BoulderElectionExpenditures;
  public typeAny: TypeAny;
  public typeBeforeafter: TypeBeforeafter;
  public typeBiblio: TypeBiblio;
  public typeBioDicom: TypeBioDicom;
  public typeBioDicomTest: TypeBioDicomTest;
  public typeBioFasta: TypeBioFasta;
  public typeBioFastq: TypeBioFastq;
  public typeBioHmmerIndex: TypeBioHmmerIndex;
  public typeBioOmeTiff: TypeBioOmeTiff;
  public typeBioOntologyAssay: TypeBioOntologyAssay;
  public typeBioOntologyCohort: TypeBioOntologyCohort;
  public typeBioOntologyPerson: TypeBioOntologyPerson;
  public typeBioOntologySample: TypeBioOntologySample;
  public typeBioOntologySeries: TypeBioOntologySeries;
  public typeBioOntologyStudy: TypeBioOntologyStudy;
  public typeBioSam: TypeBioSam;
  public typeBioSfPdb: TypeBioSfPdb;
  public typeBioSra: TypeBioSra;
  public typeBioStockholm: TypeBioStockholm;
  public typeBioTaxonomy: TypeBioTaxonomy;
  public typeBlogentry: TypeBlogentry;
  public typeBolderRentalHousing: TypeBolderRentalHousing;
  public typeBookmarks: TypeBookmarks;
  public typeBostonCrime: TypeBostonCrime;
  public typeBoulder2017ElectionContributions: TypeBoulder2017ElectionContributions;
  public typeBoulderCampaignContributions: TypeBoulderCampaignContributions;
  public typeBoulderConsultingServices: TypeBoulderConsultingServices;
  public typeBoulderCountyVoterDetails: TypeBoulderCountyVoterDetails;
  public typeBoulderCrimes: TypeBoulderCrimes;
  public typeBoulderEmails: TypeBoulderEmails;
  public typeBoulderEmployeeSalaries: TypeBoulderEmployeeSalaries;
  public typeCalendar: TypeCalendar;
  public typeCampaignDonors: TypeCampaignDonors;
  public typeCampaignExpenditures: TypeCampaignExpenditures;
  public typeCataloglink: TypeCataloglink;
  public typeCdmGrid: TypeCdmGrid;
  public typeChatroom: TypeChatroom;
  public typeColoradoWaterRights: TypeColoradoWaterRights;
  public typeCommitteeDonations: TypeCommitteeDonations;
  public typeCommunityDatahub: TypeCommunityDatahub;
  public typeCommunityResource: TypeCommunityResource;
  public typeConstructionPermits: TypeConstructionPermits;
  public typeContact: TypeContact;
  public typeDbCoIndicators: TypeDbCoIndicators;
  public typeEarthSatelliteLandsat: TypeEarthSatelliteLandsat;
  public typeFaq: TypeFaq;
  public typeFecPacs: TypeFecPacs;
  public typeFeccandidates: TypeFeccandidates;
  public typeFeed: TypeFeed;
  public typeFile: TypeFile;
  public typeFitsData: TypeFitsData;
  public typeFtp: TypeFtp;
  public typeGadgetsCountdown: TypeGadgetsCountdown;
  public typeGadgetsStock: TypeGadgetsStock;
  public typeGadgetsWeather: TypeGadgetsWeather;
  public typeGazeteerCensusTracts: TypeGazeteerCensusTracts;
  public typeGazeteerCounties: TypeGazeteerCounties;
  public typeGeoGe: TypeGeoGe;
  public typeGeoGeotiff: TypeGeoGeotiff;
  public typeGeoGpx: TypeGeoGpx;
  public typeGeoHdf5: TypeGeoHdf5;
  public typeGeoKml: TypeGeoKml;
  public typeGeoShapefile: TypeGeoShapefile;
  public typeGeoShapefileFips: TypeGeoShapefileFips;
  public typeGlossary: TypeGlossary;
  public typeGridaggregation: TypeGridaggregation;
  public typeGroup: TypeGroup;
  public typeHipchatGroup: TypeHipchatGroup;
  public typeHomepage: TypeHomepage;
  public typeIncident: TypeIncident;
  public typeJeopardy: TypeJeopardy;
  public typeLatlonimage: TypeLatlonimage;
  public typeLidarCollection: TypeLidarCollection;
  public typeLidarLas: TypeLidarLas;
  public typeLidarLvis: TypeLidarLvis;
  public typeLink: TypeLink;
  public typeLocalfiles: TypeLocalfiles;
  public typeLocations: TypeLocations;
  public typeMapGooglemap: TypeMapGooglemap;
  public typeMediaAudiofile: TypeMediaAudiofile;
  public typeMediaImageloop: TypeMediaImageloop;
  public typeMediaPhotoalbum: TypeMediaPhotoalbum;
  public typeMediaVideoChannel: TypeMediaVideoChannel;
  public typeMediaVideoQuicktime: TypeMediaVideoQuicktime;
  public typeMediaYoutubevideo: TypeMediaYoutubevideo;
  public typeNotes: TypeNotes;
  public typeNotesJsonfile: TypeNotesJsonfile;
  public typeNotesNote: TypeNotesNote;
  public typeNotesNotebook: TypeNotesNotebook;
  public typeNwsfeed: TypeNwsfeed;
  public typeOpendaplink: TypeOpendaplink;
  public typeOwlClass: TypeOwlClass;
  public typeOwlOntology: TypeOwlOntology;
  public typePasteitentry: TypePasteitentry;
  public typePointText: TypePointText;
  public typePoliceStopData: TypePoliceStopData;
  public typePoll: TypePoll;
  public typeProjectCampaign: TypeProjectCampaign;
  public typeProjectCasestudy: TypeProjectCasestudy;
  public typeProjectContribution: TypeProjectContribution;
  public typeProjectDataformat: TypeProjectDataformat;
  public typeProjectDataset: TypeProjectDataset;
  public typeProjectDeployment: TypeProjectDeployment;
  public typeProjectExperiment: TypeProjectExperiment;
  public typeProjectFieldnote: TypeProjectFieldnote;
  public typeProjectGpsControlpoints: TypeProjectGpsControlpoints;
  public typeProjectGpsRaw: TypeProjectGpsRaw;
  public typeProjectGpsRinex: TypeProjectGpsRinex;
  public typeProjectInstrument: TypeProjectInstrument;
  public typeProjectLearningResource: TypeProjectLearningResource;
  public typeProjectMeeting: TypeProjectMeeting;
  public typeProjectOrganization: TypeProjectOrganization;
  public typeProjectProgram: TypeProjectProgram;
  public typeProjectProject: TypeProjectProject;
  public typeProjectService: TypeProjectService;
  public typeProjectSite: TypeProjectSite;
  public typeProjectSoftwarepackage: TypeProjectSoftwarepackage;
  public typeProjectStandardName: TypeProjectStandardName;
  public typeProjectSurveylocation: TypeProjectSurveylocation;
  public typeProjectTerm: TypeProjectTerm;
  public typeProjectVisit: TypeProjectVisit;
  public typeProjectVocabulary: TypeProjectVocabulary;
  public typePropertySales: TypePropertySales;
  public typePropertydb: TypePropertydb;
  public typePythonNotebook: TypePythonNotebook;
  public typeSlackTeam: TypeSlackTeam;
  public typeStatusboard: TypeStatusboard;
  public typeSunrisesunset: TypeSunrisesunset;
  public typeTasks: TypeTasks;
  public typeTmdbmovies: TypeTmdbmovies;
  public typeTodo: TypeTodo;
  public typeTripEvent: TypeTripEvent;
  public typeTripFlight: TypeTripFlight;
  public typeTripHotel: TypeTripHotel;
  public typeTripReport: TypeTripReport;
  public typeTripTrip: TypeTripTrip;
  public typeTypeAwcMetar: TypeTypeAwcMetar;
  public typeTypeBizStockseries: TypeTypeBizStockseries;
  public typeTypeBlsSeries: TypeTypeBlsSeries;
  public typeTypeBlsSurvey: TypeTypeBlsSurvey;
  public typeTypeCensusAcs: TypeTypeCensusAcs;
  public typeTypeDaymet: TypeTypeDaymet;
  public typeTypeDbTable: TypeTypeDbTable;
  public typeTypeDocumentCsv: TypeTypeDocumentCsv;
  public typeTypeDocumentDoc: TypeTypeDocumentDoc;
  public typeTypeDocumentHtml: TypeTypeDocumentHtml;
  public typeTypeDocumentPdf: TypeTypeDocumentPdf;
  public typeTypeDocumentPpt: TypeTypeDocumentPpt;
  public typeTypeDocumentXls: TypeTypeDocumentXls;
  public typeTypeDrilsdownCasestudy: TypeTypeDrilsdownCasestudy;
  public typeTypeEdgarFiling: TypeTypeEdgarFiling;
  public typeTypeEiaCategory: TypeTypeEiaCategory;
  public typeTypeEiaSeries: TypeTypeEiaSeries;
  public typeTypeEsriFeatureserver: TypeTypeEsriFeatureserver;
  public typeTypeEsriGeometryserver: TypeTypeEsriGeometryserver;
  public typeTypeEsriGpserver: TypeTypeEsriGpserver;
  public typeTypeEsriImageserver: TypeTypeEsriImageserver;
  public typeTypeEsriLayer: TypeTypeEsriLayer;
  public typeTypeEsriMapserver: TypeTypeEsriMapserver;
  public typeTypeEsriRestfolder: TypeTypeEsriRestfolder;
  public typeTypeEsriRestserver: TypeTypeEsriRestserver;
  public typeTypeEsriRestservice: TypeTypeEsriRestservice;
  public typeTypeExtremes: TypeTypeExtremes;
  public typeTypeFredCategory: TypeTypeFredCategory;
  public typeTypeFredSeries: TypeTypeFredSeries;
  public typeTypeGtfsAgency: TypeTypeGtfsAgency;
  public typeTypeGtfsRoute: TypeTypeGtfsRoute;
  public typeTypeGtfsRoutes: TypeTypeGtfsRoutes;
  public typeTypeGtfsStop: TypeTypeGtfsStop;
  public typeTypeGtfsStops: TypeTypeGtfsStops;
  public typeTypeGtfsTrip: TypeTypeGtfsTrip;
  public typeTypeHazarddata: TypeTypeHazarddata;
  public typeTypeHydroColorado: TypeTypeHydroColorado;
  public typeTypeIdvBundle: TypeTypeIdvBundle;
  public typeTypeImage: TypeTypeImage;
  public typeTypeImageAirport: TypeTypeImageAirport;
  public typeTypeImageWebcam: TypeTypeImageWebcam;
  public typeTypeMb: TypeTypeMb;
  public typeTypeMbCollection: TypeTypeMbCollection;
  public typeTypeMbPointBasic: TypeTypeMbPointBasic;
  public typeTypeMetametaDictionary: TypeTypeMetametaDictionary;
  public typeTypeMetametaField: TypeTypeMetametaField;
  public typeTypeNasaames: TypeTypeNasaames;
  public typeTypeNcss: TypeTypeNcss;
  public typeTypeNitf: TypeTypeNitf;
  public typeTypePointAmerifluxLevel2: TypeTypePointAmerifluxLevel2;
  public typeTypePointAmrcFinal: TypeTypePointAmrcFinal;
  public typeTypePointAmrcFreewave: TypeTypePointAmrcFreewave;
  public typeTypePointCzo: TypeTypePointCzo;
  public typeTypePointGcnet: TypeTypePointGcnet;
  public typeTypePointGeomagIaga2002: TypeTypePointGeomagIaga2002;
  public typeTypePointHydroWaterml: TypeTypePointHydroWaterml;
  public typeTypePointIcebridgeAtmIcessn: TypeTypePointIcebridgeAtmIcessn;
  public typeTypePointIcebridgeAtmQfit: TypeTypePointIcebridgeAtmQfit;
  public typeTypePointIcebridgeMccordsIrmcr2: TypeTypePointIcebridgeMccordsIrmcr2;
  public typeTypePointIcebridgeMccordsIrmcr3: TypeTypePointIcebridgeMccordsIrmcr3;
  public typeTypePointIcebridgeParis: TypeTypePointIcebridgeParis;
  public typeTypePointIdv: TypeTypePointIdv;
  public typeTypePointInline: TypeTypePointInline;
  public typeTypePointNcdcClimate: TypeTypePointNcdcClimate;
  public typeTypePointNetcdf: TypeTypePointNetcdf;
  public typeTypePointNoaaCarbon: TypeTypePointNoaaCarbon;
  public typeTypePointNoaaFlaskEvent: TypeTypePointNoaaFlaskEvent;
  public typeTypePointNoaaFlaskMonth: TypeTypePointNoaaFlaskMonth;
  public typeTypePointNoaaMadis: TypeTypePointNoaaMadis;
  public typeTypePointNoaaTower: TypeTypePointNoaaTower;
  public typeTypePointOceanCnv: TypeTypePointOceanCnv;
  public typeTypePointOceanCsvSadoTts: TypeTypePointOceanCsvSadoTts;
  public typeTypePointOceanCsvSadoMeteo: TypeTypePointOceanCsvSadoMeteo;
  public typeTypePointOceanCsvSadoPosition: TypeTypePointOceanCsvSadoPosition;
  public typeTypePointOceanNetcdfGlider: TypeTypePointOceanNetcdfGlider;
  public typeTypePointOceanNetcdfTrack: TypeTypePointOceanNetcdfTrack;
  public typeTypePointOceanOoiDmgx: TypeTypePointOceanOoiDmgx;
  public typeTypePointOpenaq: TypeTypePointOpenaq;
  public typeTypePointPboPositionTimeSeries: TypeTypePointPboPositionTimeSeries;
  public typeTypePointSimpleRecords: TypeTypePointSimpleRecords;
  public typeTypePointSnotel: TypeTypePointSnotel;
  public typeTypePointText: TypeTypePointText;
  public typeTypePointWsbbGgp: TypeTypePointWsbbGgp;
  public typeTypePsdMonthlyClimateIndex: TypeTypePsdMonthlyClimateIndex;
  public typeTypeQuandlSeries: TypeTypeQuandlSeries;
  public typeTypeServiceGroup: TypeTypeServiceGroup;
  public typeTypeServiceLink: TypeTypeServiceLink;
  public typeTypeSocrataSeries: TypeTypeSocrataSeries;
  public typeTypeSoundingCod: TypeTypeSoundingCod;
  public typeTypeSoundingFrd: TypeTypeSoundingFrd;
  public typeTypeSoundingGsd: TypeTypeSoundingGsd;
  public typeTypeSoundingWyoming: TypeTypeSoundingWyoming;
  public typeTypeTmy: TypeTypeTmy;
  public typeTypeTweet: TypeTypeTweet;
  public typeTypeUsgsGauge: TypeTypeUsgsGauge;
  public typeTypeVirtual: TypeTypeVirtual;
  public typeTypeWmsCapabilities: TypeTypeWmsCapabilities;
  public typeTypeWmsLayer: TypeTypeWmsLayer;
  public typeUfoSightings: TypeUfoSightings;
  public typeUsPlaces: TypeUsPlaces;
  public typeVoteYesno: TypeVoteYesno;
  public typeWeblog: TypeWeblog;
  public typeWikipage: TypeWikipage;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.serviceMediaTabularExtractsheet = new ServiceMediaTabularExtractsheet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.type2017BoulderElectionExpenditures = new Type2017BoulderElectionExpenditures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeAny = new TypeAny(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBeforeafter = new TypeBeforeafter(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBiblio = new TypeBiblio(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioDicom = new TypeBioDicom(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioDicomTest = new TypeBioDicomTest(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioFasta = new TypeBioFasta(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioFastq = new TypeBioFastq(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioHmmerIndex = new TypeBioHmmerIndex(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOmeTiff = new TypeBioOmeTiff(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOntologyAssay = new TypeBioOntologyAssay(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOntologyCohort = new TypeBioOntologyCohort(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOntologyPerson = new TypeBioOntologyPerson(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOntologySample = new TypeBioOntologySample(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOntologySeries = new TypeBioOntologySeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioOntologyStudy = new TypeBioOntologyStudy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioSam = new TypeBioSam(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioSfPdb = new TypeBioSfPdb(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioSra = new TypeBioSra(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioStockholm = new TypeBioStockholm(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBioTaxonomy = new TypeBioTaxonomy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBlogentry = new TypeBlogentry(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBolderRentalHousing = new TypeBolderRentalHousing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBookmarks = new TypeBookmarks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBostonCrime = new TypeBostonCrime(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulder2017ElectionContributions = new TypeBoulder2017ElectionContributions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulderCampaignContributions = new TypeBoulderCampaignContributions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulderConsultingServices = new TypeBoulderConsultingServices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulderCountyVoterDetails = new TypeBoulderCountyVoterDetails(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulderCrimes = new TypeBoulderCrimes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulderEmails = new TypeBoulderEmails(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeBoulderEmployeeSalaries = new TypeBoulderEmployeeSalaries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCalendar = new TypeCalendar(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCampaignDonors = new TypeCampaignDonors(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCampaignExpenditures = new TypeCampaignExpenditures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCataloglink = new TypeCataloglink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCdmGrid = new TypeCdmGrid(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeChatroom = new TypeChatroom(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeColoradoWaterRights = new TypeColoradoWaterRights(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCommitteeDonations = new TypeCommitteeDonations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCommunityDatahub = new TypeCommunityDatahub(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeCommunityResource = new TypeCommunityResource(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeConstructionPermits = new TypeConstructionPermits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeContact = new TypeContact(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeDbCoIndicators = new TypeDbCoIndicators(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeEarthSatelliteLandsat = new TypeEarthSatelliteLandsat(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFaq = new TypeFaq(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFecPacs = new TypeFecPacs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFeccandidates = new TypeFeccandidates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFeed = new TypeFeed(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFile = new TypeFile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFitsData = new TypeFitsData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeFtp = new TypeFtp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGadgetsCountdown = new TypeGadgetsCountdown(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGadgetsStock = new TypeGadgetsStock(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGadgetsWeather = new TypeGadgetsWeather(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGazeteerCensusTracts = new TypeGazeteerCensusTracts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGazeteerCounties = new TypeGazeteerCounties(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoGe = new TypeGeoGe(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoGeotiff = new TypeGeoGeotiff(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoGpx = new TypeGeoGpx(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoHdf5 = new TypeGeoHdf5(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoKml = new TypeGeoKml(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoShapefile = new TypeGeoShapefile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGeoShapefileFips = new TypeGeoShapefileFips(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGlossary = new TypeGlossary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGridaggregation = new TypeGridaggregation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeGroup = new TypeGroup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeHipchatGroup = new TypeHipchatGroup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeHomepage = new TypeHomepage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeIncident = new TypeIncident(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeJeopardy = new TypeJeopardy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLatlonimage = new TypeLatlonimage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLidarCollection = new TypeLidarCollection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLidarLas = new TypeLidarLas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLidarLvis = new TypeLidarLvis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLink = new TypeLink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLocalfiles = new TypeLocalfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeLocations = new TypeLocations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMapGooglemap = new TypeMapGooglemap(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMediaAudiofile = new TypeMediaAudiofile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMediaImageloop = new TypeMediaImageloop(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMediaPhotoalbum = new TypeMediaPhotoalbum(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMediaVideoChannel = new TypeMediaVideoChannel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMediaVideoQuicktime = new TypeMediaVideoQuicktime(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeMediaYoutubevideo = new TypeMediaYoutubevideo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeNotes = new TypeNotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeNotesJsonfile = new TypeNotesJsonfile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeNotesNote = new TypeNotesNote(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeNotesNotebook = new TypeNotesNotebook(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeNwsfeed = new TypeNwsfeed(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeOpendaplink = new TypeOpendaplink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeOwlClass = new TypeOwlClass(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeOwlOntology = new TypeOwlOntology(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePasteitentry = new TypePasteitentry(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePointText = new TypePointText(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePoliceStopData = new TypePoliceStopData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePoll = new TypePoll(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectCampaign = new TypeProjectCampaign(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectCasestudy = new TypeProjectCasestudy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectContribution = new TypeProjectContribution(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectDataformat = new TypeProjectDataformat(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectDataset = new TypeProjectDataset(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectDeployment = new TypeProjectDeployment(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectExperiment = new TypeProjectExperiment(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectFieldnote = new TypeProjectFieldnote(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectGpsControlpoints = new TypeProjectGpsControlpoints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectGpsRaw = new TypeProjectGpsRaw(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectGpsRinex = new TypeProjectGpsRinex(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectInstrument = new TypeProjectInstrument(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectLearningResource = new TypeProjectLearningResource(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectMeeting = new TypeProjectMeeting(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectOrganization = new TypeProjectOrganization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectProgram = new TypeProjectProgram(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectProject = new TypeProjectProject(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectService = new TypeProjectService(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectSite = new TypeProjectSite(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectSoftwarepackage = new TypeProjectSoftwarepackage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectStandardName = new TypeProjectStandardName(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectSurveylocation = new TypeProjectSurveylocation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectTerm = new TypeProjectTerm(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectVisit = new TypeProjectVisit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeProjectVocabulary = new TypeProjectVocabulary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePropertySales = new TypePropertySales(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePropertydb = new TypePropertydb(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typePythonNotebook = new TypePythonNotebook(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeSlackTeam = new TypeSlackTeam(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeStatusboard = new TypeStatusboard(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeSunrisesunset = new TypeSunrisesunset(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTasks = new TypeTasks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTmdbmovies = new TypeTmdbmovies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTodo = new TypeTodo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTripEvent = new TypeTripEvent(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTripFlight = new TypeTripFlight(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTripHotel = new TypeTripHotel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTripReport = new TypeTripReport(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTripTrip = new TypeTripTrip(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeAwcMetar = new TypeTypeAwcMetar(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeBizStockseries = new TypeTypeBizStockseries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeBlsSeries = new TypeTypeBlsSeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeBlsSurvey = new TypeTypeBlsSurvey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeCensusAcs = new TypeTypeCensusAcs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDaymet = new TypeTypeDaymet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDbTable = new TypeTypeDbTable(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDocumentCsv = new TypeTypeDocumentCsv(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDocumentDoc = new TypeTypeDocumentDoc(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDocumentHtml = new TypeTypeDocumentHtml(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDocumentPdf = new TypeTypeDocumentPdf(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDocumentPpt = new TypeTypeDocumentPpt(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDocumentXls = new TypeTypeDocumentXls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeDrilsdownCasestudy = new TypeTypeDrilsdownCasestudy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEdgarFiling = new TypeTypeEdgarFiling(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEiaCategory = new TypeTypeEiaCategory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEiaSeries = new TypeTypeEiaSeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriFeatureserver = new TypeTypeEsriFeatureserver(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriGeometryserver = new TypeTypeEsriGeometryserver(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriGpserver = new TypeTypeEsriGpserver(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriImageserver = new TypeTypeEsriImageserver(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriLayer = new TypeTypeEsriLayer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriMapserver = new TypeTypeEsriMapserver(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriRestfolder = new TypeTypeEsriRestfolder(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriRestserver = new TypeTypeEsriRestserver(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeEsriRestservice = new TypeTypeEsriRestservice(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeExtremes = new TypeTypeExtremes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeFredCategory = new TypeTypeFredCategory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeFredSeries = new TypeTypeFredSeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeGtfsAgency = new TypeTypeGtfsAgency(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeGtfsRoute = new TypeTypeGtfsRoute(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeGtfsRoutes = new TypeTypeGtfsRoutes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeGtfsStop = new TypeTypeGtfsStop(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeGtfsStops = new TypeTypeGtfsStops(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeGtfsTrip = new TypeTypeGtfsTrip(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeHazarddata = new TypeTypeHazarddata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeHydroColorado = new TypeTypeHydroColorado(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeIdvBundle = new TypeTypeIdvBundle(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeImage = new TypeTypeImage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeImageAirport = new TypeTypeImageAirport(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeImageWebcam = new TypeTypeImageWebcam(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeMb = new TypeTypeMb(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeMbCollection = new TypeTypeMbCollection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeMbPointBasic = new TypeTypeMbPointBasic(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeMetametaDictionary = new TypeTypeMetametaDictionary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeMetametaField = new TypeTypeMetametaField(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeNasaames = new TypeTypeNasaames(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeNcss = new TypeTypeNcss(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeNitf = new TypeTypeNitf(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointAmerifluxLevel2 = new TypeTypePointAmerifluxLevel2(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointAmrcFinal = new TypeTypePointAmrcFinal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointAmrcFreewave = new TypeTypePointAmrcFreewave(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointCzo = new TypeTypePointCzo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointGcnet = new TypeTypePointGcnet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointGeomagIaga2002 = new TypeTypePointGeomagIaga2002(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointHydroWaterml = new TypeTypePointHydroWaterml(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointIcebridgeAtmIcessn = new TypeTypePointIcebridgeAtmIcessn(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointIcebridgeAtmQfit = new TypeTypePointIcebridgeAtmQfit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointIcebridgeMccordsIrmcr2 = new TypeTypePointIcebridgeMccordsIrmcr2(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointIcebridgeMccordsIrmcr3 = new TypeTypePointIcebridgeMccordsIrmcr3(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointIcebridgeParis = new TypeTypePointIcebridgeParis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointIdv = new TypeTypePointIdv(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointInline = new TypeTypePointInline(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNcdcClimate = new TypeTypePointNcdcClimate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNetcdf = new TypeTypePointNetcdf(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNoaaCarbon = new TypeTypePointNoaaCarbon(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNoaaFlaskEvent = new TypeTypePointNoaaFlaskEvent(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNoaaFlaskMonth = new TypeTypePointNoaaFlaskMonth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNoaaMadis = new TypeTypePointNoaaMadis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointNoaaTower = new TypeTypePointNoaaTower(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanCnv = new TypeTypePointOceanCnv(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanCsvSadoTts = new TypeTypePointOceanCsvSadoTts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanCsvSadoMeteo = new TypeTypePointOceanCsvSadoMeteo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanCsvSadoPosition = new TypeTypePointOceanCsvSadoPosition(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanNetcdfGlider = new TypeTypePointOceanNetcdfGlider(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanNetcdfTrack = new TypeTypePointOceanNetcdfTrack(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOceanOoiDmgx = new TypeTypePointOceanOoiDmgx(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointOpenaq = new TypeTypePointOpenaq(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointPboPositionTimeSeries = new TypeTypePointPboPositionTimeSeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointSimpleRecords = new TypeTypePointSimpleRecords(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointSnotel = new TypeTypePointSnotel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointText = new TypeTypePointText(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePointWsbbGgp = new TypeTypePointWsbbGgp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypePsdMonthlyClimateIndex = new TypeTypePsdMonthlyClimateIndex(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeQuandlSeries = new TypeTypeQuandlSeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeServiceGroup = new TypeTypeServiceGroup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeServiceLink = new TypeTypeServiceLink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeSocrataSeries = new TypeTypeSocrataSeries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeSoundingCod = new TypeTypeSoundingCod(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeSoundingFrd = new TypeTypeSoundingFrd(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeSoundingGsd = new TypeTypeSoundingGsd(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeSoundingWyoming = new TypeTypeSoundingWyoming(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeTmy = new TypeTypeTmy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeTweet = new TypeTypeTweet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeUsgsGauge = new TypeTypeUsgsGauge(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeVirtual = new TypeTypeVirtual(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeWmsCapabilities = new TypeTypeWmsCapabilities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeTypeWmsLayer = new TypeTypeWmsLayer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeUfoSightings = new TypeUfoSightings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeUsPlaces = new TypeUsPlaces(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeVoteYesno = new TypeVoteYesno(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeWeblog = new TypeWeblog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeWikipage = new TypeWikipage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
