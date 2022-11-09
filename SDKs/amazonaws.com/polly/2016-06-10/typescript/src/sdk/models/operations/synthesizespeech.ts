import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SynthesizeSpeechHeaders extends SpeakeasyBase {
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

export enum SynthesizeSpeechRequestBodyEngineEnum {
    Standard = "standard"
,    Neural = "neural"
}

export enum SynthesizeSpeechRequestBodyLanguageCodeEnum {
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

export enum SynthesizeSpeechRequestBodyOutputFormatEnum {
    Json = "json"
,    Mp3 = "mp3"
,    OggVorbis = "ogg_vorbis"
,    Pcm = "pcm"
}

export enum SynthesizeSpeechRequestBodyTextTypeEnum {
    Ssml = "ssml"
,    Text = "text"
}

export enum SynthesizeSpeechRequestBodyVoiceIdEnum {
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


export class SynthesizeSpeechRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Engine" })
  engine?: SynthesizeSpeechRequestBodyEngineEnum;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: SynthesizeSpeechRequestBodyLanguageCodeEnum;

  @Metadata({ data: "json, name=LexiconNames" })
  lexiconNames?: string[];

  @Metadata({ data: "json, name=OutputFormat" })
  outputFormat: SynthesizeSpeechRequestBodyOutputFormatEnum;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: string;

  @Metadata({ data: "json, name=SpeechMarkTypes" })
  speechMarkTypes?: shared.SpeechMarkTypeEnum[];

  @Metadata({ data: "json, name=Text" })
  text: string;

  @Metadata({ data: "json, name=TextType" })
  textType?: SynthesizeSpeechRequestBodyTextTypeEnum;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId: SynthesizeSpeechRequestBodyVoiceIdEnum;
}


export class SynthesizeSpeechRequest extends SpeakeasyBase {
  @Metadata()
  headers: SynthesizeSpeechHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SynthesizeSpeechRequestBody;
}


export class SynthesizeSpeechResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  engineNotSupportedException?: any;

  @Metadata()
  invalidSampleRateException?: any;

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
  statusCode: number;

  @Metadata()
  synthesizeSpeechOutput?: shared.SynthesizeSpeechOutput;

  @Metadata()
  textLengthExceededException?: any;
}
