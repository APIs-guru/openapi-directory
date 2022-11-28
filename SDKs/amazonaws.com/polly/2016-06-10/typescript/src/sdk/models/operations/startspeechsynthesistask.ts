import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartSpeechSynthesisTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum StartSpeechSynthesisTaskRequestBodyEngineEnum {
    Standard = "standard",
    Neural = "neural"
}

export enum StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum {
    Arb = "arb",
    CmnCn = "cmn-CN",
    CyGb = "cy-GB",
    DaDk = "da-DK",
    DeDe = "de-DE",
    EnAu = "en-AU",
    EnGb = "en-GB",
    EnGbWls = "en-GB-WLS",
    EnIn = "en-IN",
    EnUs = "en-US",
    EsEs = "es-ES",
    EsMx = "es-MX",
    EsUs = "es-US",
    FrCa = "fr-CA",
    FrFr = "fr-FR",
    IsIs = "is-IS",
    ItIt = "it-IT",
    JaJp = "ja-JP",
    HiIn = "hi-IN",
    KoKr = "ko-KR",
    NbNo = "nb-NO",
    NlNl = "nl-NL",
    PlPl = "pl-PL",
    PtBr = "pt-BR",
    PtPt = "pt-PT",
    RoRo = "ro-RO",
    RuRu = "ru-RU",
    SvSe = "sv-SE",
    TrTr = "tr-TR",
    EnNz = "en-NZ",
    EnZa = "en-ZA"
}

export enum StartSpeechSynthesisTaskRequestBodyOutputFormatEnum {
    Json = "json",
    Mp3 = "mp3",
    OggVorbis = "ogg_vorbis",
    Pcm = "pcm"
}

export enum StartSpeechSynthesisTaskRequestBodyTextTypeEnum {
    Ssml = "ssml",
    Text = "text"
}

export enum StartSpeechSynthesisTaskRequestBodyVoiceIdEnum {
    Aditi = "Aditi",
    Amy = "Amy",
    Astrid = "Astrid",
    Bianca = "Bianca",
    Brian = "Brian",
    Camila = "Camila",
    Carla = "Carla",
    Carmen = "Carmen",
    Celine = "Celine",
    Chantal = "Chantal",
    Conchita = "Conchita",
    Cristiano = "Cristiano",
    Dora = "Dora",
    Emma = "Emma",
    Enrique = "Enrique",
    Ewa = "Ewa",
    Filiz = "Filiz",
    Gabrielle = "Gabrielle",
    Geraint = "Geraint",
    Giorgio = "Giorgio",
    Gwyneth = "Gwyneth",
    Hans = "Hans",
    Ines = "Ines",
    Ivy = "Ivy",
    Jacek = "Jacek",
    Jan = "Jan",
    Joanna = "Joanna",
    Joey = "Joey",
    Justin = "Justin",
    Karl = "Karl",
    Kendra = "Kendra",
    Kevin = "Kevin",
    Kimberly = "Kimberly",
    Lea = "Lea",
    Liv = "Liv",
    Lotte = "Lotte",
    Lucia = "Lucia",
    Lupe = "Lupe",
    Mads = "Mads",
    Maja = "Maja",
    Marlene = "Marlene",
    Mathieu = "Mathieu",
    Matthew = "Matthew",
    Maxim = "Maxim",
    Mia = "Mia",
    Miguel = "Miguel",
    Mizuki = "Mizuki",
    Naja = "Naja",
    Nicole = "Nicole",
    Olivia = "Olivia",
    Penelope = "Penelope",
    Raveena = "Raveena",
    Ricardo = "Ricardo",
    Ruben = "Ruben",
    Russell = "Russell",
    Salli = "Salli",
    Seoyeon = "Seoyeon",
    Takumi = "Takumi",
    Tatyana = "Tatyana",
    Vicki = "Vicki",
    Vitoria = "Vitoria",
    Zeina = "Zeina",
    Zhiyu = "Zhiyu",
    Aria = "Aria",
    Ayanda = "Ayanda"
}


export class StartSpeechSynthesisTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: StartSpeechSynthesisTaskRequestBodyEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LexiconNames" })
  lexiconNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=OutputFormat" })
  outputFormat: StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SpeechMarkTypes" })
  speechMarkTypes?: shared.SpeechMarkTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=TextType" })
  textType?: StartSpeechSynthesisTaskRequestBodyTextTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId: StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;
}


export class StartSpeechSynthesisTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartSpeechSynthesisTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartSpeechSynthesisTaskRequestBody;
}


export class StartSpeechSynthesisTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  engineNotSupportedException?: any;

  @SpeakeasyMetadata()
  invalidS3BucketException?: any;

  @SpeakeasyMetadata()
  invalidS3KeyException?: any;

  @SpeakeasyMetadata()
  invalidSampleRateException?: any;

  @SpeakeasyMetadata()
  invalidSnsTopicArnException?: any;

  @SpeakeasyMetadata()
  invalidSsmlException?: any;

  @SpeakeasyMetadata()
  languageNotSupportedException?: any;

  @SpeakeasyMetadata()
  lexiconNotFoundException?: any;

  @SpeakeasyMetadata()
  marksNotSupportedForFormatException?: any;

  @SpeakeasyMetadata()
  serviceFailureException?: any;

  @SpeakeasyMetadata()
  ssmlMarksNotSupportedForTextTypeException?: any;

  @SpeakeasyMetadata()
  startSpeechSynthesisTaskOutput?: shared.StartSpeechSynthesisTaskOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  textLengthExceededException?: any;
}
