import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartSpeechSynthesisTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum StartSpeechSynthesisTaskRequestBodyEngineEnum {
    Standard = "standard"
,    Neural = "neural"
}

export enum StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum {
    Arb = "arb"
,    CmnCn = "cmn-CN"
,    CyGb = "cy-GB"
,    DaDk = "da-DK"
,    DeDe = "de-DE"
,    EnAu = "en-AU"
,    EnGb = "en-GB"
,    EnGbWls = "en-GB-WLS"
,    EnIn = "en-IN"
,    EnUs = "en-US"
,    EsEs = "es-ES"
,    EsMx = "es-MX"
,    EsUs = "es-US"
,    FrCa = "fr-CA"
,    FrFr = "fr-FR"
,    IsIs = "is-IS"
,    ItIt = "it-IT"
,    JaJp = "ja-JP"
,    HiIn = "hi-IN"
,    KoKr = "ko-KR"
,    NbNo = "nb-NO"
,    NlNl = "nl-NL"
,    PlPl = "pl-PL"
,    PtBr = "pt-BR"
,    PtPt = "pt-PT"
,    RoRo = "ro-RO"
,    RuRu = "ru-RU"
,    SvSe = "sv-SE"
,    TrTr = "tr-TR"
,    EnNz = "en-NZ"
,    EnZa = "en-ZA"
}

export enum StartSpeechSynthesisTaskRequestBodyOutputFormatEnum {
    Json = "json"
,    Mp3 = "mp3"
,    OggVorbis = "ogg_vorbis"
,    Pcm = "pcm"
}

export enum StartSpeechSynthesisTaskRequestBodyTextTypeEnum {
    Ssml = "ssml"
,    Text = "text"
}

export enum StartSpeechSynthesisTaskRequestBodyVoiceIdEnum {
    Aditi = "Aditi"
,    Amy = "Amy"
,    Astrid = "Astrid"
,    Bianca = "Bianca"
,    Brian = "Brian"
,    Camila = "Camila"
,    Carla = "Carla"
,    Carmen = "Carmen"
,    Celine = "Celine"
,    Chantal = "Chantal"
,    Conchita = "Conchita"
,    Cristiano = "Cristiano"
,    Dora = "Dora"
,    Emma = "Emma"
,    Enrique = "Enrique"
,    Ewa = "Ewa"
,    Filiz = "Filiz"
,    Gabrielle = "Gabrielle"
,    Geraint = "Geraint"
,    Giorgio = "Giorgio"
,    Gwyneth = "Gwyneth"
,    Hans = "Hans"
,    Ines = "Ines"
,    Ivy = "Ivy"
,    Jacek = "Jacek"
,    Jan = "Jan"
,    Joanna = "Joanna"
,    Joey = "Joey"
,    Justin = "Justin"
,    Karl = "Karl"
,    Kendra = "Kendra"
,    Kevin = "Kevin"
,    Kimberly = "Kimberly"
,    Lea = "Lea"
,    Liv = "Liv"
,    Lotte = "Lotte"
,    Lucia = "Lucia"
,    Lupe = "Lupe"
,    Mads = "Mads"
,    Maja = "Maja"
,    Marlene = "Marlene"
,    Mathieu = "Mathieu"
,    Matthew = "Matthew"
,    Maxim = "Maxim"
,    Mia = "Mia"
,    Miguel = "Miguel"
,    Mizuki = "Mizuki"
,    Naja = "Naja"
,    Nicole = "Nicole"
,    Olivia = "Olivia"
,    Penelope = "Penelope"
,    Raveena = "Raveena"
,    Ricardo = "Ricardo"
,    Ruben = "Ruben"
,    Russell = "Russell"
,    Salli = "Salli"
,    Seoyeon = "Seoyeon"
,    Takumi = "Takumi"
,    Tatyana = "Tatyana"
,    Vicki = "Vicki"
,    Vitoria = "Vitoria"
,    Zeina = "Zeina"
,    Zhiyu = "Zhiyu"
,    Aria = "Aria"
,    Ayanda = "Ayanda"
}


export class StartSpeechSynthesisTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Engine" })
  engine?: StartSpeechSynthesisTaskRequestBodyEngineEnum;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;

  @Metadata({ data: "json, name=LexiconNames" })
  lexiconNames?: string[];

  @Metadata({ data: "json, name=OutputFormat" })
  outputFormat: StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;

  @Metadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName: string;

  @Metadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SpeechMarkTypes" })
  speechMarkTypes?: shared.SpeechMarkTypeEnum[];

  @Metadata({ data: "json, name=Text" })
  text: string;

  @Metadata({ data: "json, name=TextType" })
  textType?: StartSpeechSynthesisTaskRequestBodyTextTypeEnum;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId: StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;
}


export class StartSpeechSynthesisTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartSpeechSynthesisTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartSpeechSynthesisTaskRequestBody;
}


export class StartSpeechSynthesisTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  engineNotSupportedException?: any;

  @Metadata()
  invalidS3BucketException?: any;

  @Metadata()
  invalidS3KeyException?: any;

  @Metadata()
  invalidSampleRateException?: any;

  @Metadata()
  invalidSnsTopicArnException?: any;

  @Metadata()
  invalidSsmlException?: any;

  @Metadata()
  languageNotSupportedException?: any;

  @Metadata()
  lexiconNotFoundException?: any;

  @Metadata()
  marksNotSupportedForFormatException?: any;

  @Metadata()
  serviceFailureException?: any;

  @Metadata()
  ssmlMarksNotSupportedForTextTypeException?: any;

  @Metadata()
  startSpeechSynthesisTaskOutput?: shared.StartSpeechSynthesisTaskOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  textLengthExceededException?: any;
}
