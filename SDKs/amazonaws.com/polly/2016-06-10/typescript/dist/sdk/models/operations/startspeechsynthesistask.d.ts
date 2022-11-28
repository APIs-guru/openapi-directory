import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartSpeechSynthesisTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum StartSpeechSynthesisTaskRequestBodyEngineEnum {
    Standard = "standard",
    Neural = "neural"
}
export declare enum StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum {
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
export declare enum StartSpeechSynthesisTaskRequestBodyOutputFormatEnum {
    Json = "json",
    Mp3 = "mp3",
    OggVorbis = "ogg_vorbis",
    Pcm = "pcm"
}
export declare enum StartSpeechSynthesisTaskRequestBodyTextTypeEnum {
    Ssml = "ssml",
    Text = "text"
}
export declare enum StartSpeechSynthesisTaskRequestBodyVoiceIdEnum {
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
export declare class StartSpeechSynthesisTaskRequestBody extends SpeakeasyBase {
    engine?: StartSpeechSynthesisTaskRequestBodyEngineEnum;
    languageCode?: StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;
    lexiconNames?: string[];
    outputFormat: StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;
    outputS3BucketName: string;
    outputS3KeyPrefix?: string;
    sampleRate?: string;
    snsTopicArn?: string;
    speechMarkTypes?: shared.SpeechMarkTypeEnum[];
    text: string;
    textType?: StartSpeechSynthesisTaskRequestBodyTextTypeEnum;
    voiceId: StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;
}
export declare class StartSpeechSynthesisTaskRequest extends SpeakeasyBase {
    headers: StartSpeechSynthesisTaskHeaders;
    request: StartSpeechSynthesisTaskRequestBody;
}
export declare class StartSpeechSynthesisTaskResponse extends SpeakeasyBase {
    contentType: string;
    engineNotSupportedException?: any;
    invalidS3BucketException?: any;
    invalidS3KeyException?: any;
    invalidSampleRateException?: any;
    invalidSnsTopicArnException?: any;
    invalidSsmlException?: any;
    languageNotSupportedException?: any;
    lexiconNotFoundException?: any;
    marksNotSupportedForFormatException?: any;
    serviceFailureException?: any;
    ssmlMarksNotSupportedForTextTypeException?: any;
    startSpeechSynthesisTaskOutput?: shared.StartSpeechSynthesisTaskOutput;
    statusCode: number;
    textLengthExceededException?: any;
}
