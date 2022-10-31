from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartSpeechSynthesisTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class StartSpeechSynthesisTaskRequestBodyEngineEnum(str, Enum):
    STANDARD = "standard"
    NEURAL = "neural"

class StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum(str, Enum):
    ARB = "arb"
    CMN_CN = "cmn-CN"
    CY_GB = "cy-GB"
    DA_DK = "da-DK"
    DE_DE = "de-DE"
    EN_AU = "en-AU"
    EN_GB = "en-GB"
    EN_GB_WLS = "en-GB-WLS"
    EN_IN = "en-IN"
    EN_US = "en-US"
    ES_ES = "es-ES"
    ES_MX = "es-MX"
    ES_US = "es-US"
    FR_CA = "fr-CA"
    FR_FR = "fr-FR"
    IS_IS = "is-IS"
    IT_IT = "it-IT"
    JA_JP = "ja-JP"
    HI_IN = "hi-IN"
    KO_KR = "ko-KR"
    NB_NO = "nb-NO"
    NL_NL = "nl-NL"
    PL_PL = "pl-PL"
    PT_BR = "pt-BR"
    PT_PT = "pt-PT"
    RO_RO = "ro-RO"
    RU_RU = "ru-RU"
    SV_SE = "sv-SE"
    TR_TR = "tr-TR"
    EN_NZ = "en-NZ"
    EN_ZA = "en-ZA"

class StartSpeechSynthesisTaskRequestBodyOutputFormatEnum(str, Enum):
    JSON = "json"
    MP3 = "mp3"
    OGG_VORBIS = "ogg_vorbis"
    PCM = "pcm"

class StartSpeechSynthesisTaskRequestBodyTextTypeEnum(str, Enum):
    SSML = "ssml"
    TEXT = "text"

class StartSpeechSynthesisTaskRequestBodyVoiceIDEnum(str, Enum):
    ADITI = "Aditi"
    AMY = "Amy"
    ASTRID = "Astrid"
    BIANCA = "Bianca"
    BRIAN = "Brian"
    CAMILA = "Camila"
    CARLA = "Carla"
    CARMEN = "Carmen"
    CELINE = "Celine"
    CHANTAL = "Chantal"
    CONCHITA = "Conchita"
    CRISTIANO = "Cristiano"
    DORA = "Dora"
    EMMA = "Emma"
    ENRIQUE = "Enrique"
    EWA = "Ewa"
    FILIZ = "Filiz"
    GABRIELLE = "Gabrielle"
    GERAINT = "Geraint"
    GIORGIO = "Giorgio"
    GWYNETH = "Gwyneth"
    HANS = "Hans"
    INES = "Ines"
    IVY = "Ivy"
    JACEK = "Jacek"
    JAN = "Jan"
    JOANNA = "Joanna"
    JOEY = "Joey"
    JUSTIN = "Justin"
    KARL = "Karl"
    KENDRA = "Kendra"
    KEVIN = "Kevin"
    KIMBERLY = "Kimberly"
    LEA = "Lea"
    LIV = "Liv"
    LOTTE = "Lotte"
    LUCIA = "Lucia"
    LUPE = "Lupe"
    MADS = "Mads"
    MAJA = "Maja"
    MARLENE = "Marlene"
    MATHIEU = "Mathieu"
    MATTHEW = "Matthew"
    MAXIM = "Maxim"
    MIA = "Mia"
    MIGUEL = "Miguel"
    MIZUKI = "Mizuki"
    NAJA = "Naja"
    NICOLE = "Nicole"
    OLIVIA = "Olivia"
    PENELOPE = "Penelope"
    RAVEENA = "Raveena"
    RICARDO = "Ricardo"
    RUBEN = "Ruben"
    RUSSELL = "Russell"
    SALLI = "Salli"
    SEOYEON = "Seoyeon"
    TAKUMI = "Takumi"
    TATYANA = "Tatyana"
    VICKI = "Vicki"
    VITORIA = "Vitoria"
    ZEINA = "Zeina"
    ZHIYU = "Zhiyu"
    ARIA = "Aria"
    AYANDA = "Ayanda"


@dataclass_json
@dataclass
class StartSpeechSynthesisTaskRequestBody:
    engine: Optional[StartSpeechSynthesisTaskRequestBodyEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    language_code: Optional[StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    lexicon_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LexiconNames' }})
    output_format: StartSpeechSynthesisTaskRequestBodyOutputFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFormat' }})
    output_s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3BucketName' }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3KeyPrefix' }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleRate' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    speech_mark_types: Optional[List[shared.SpeechMarkTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpeechMarkTypes' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    text_type: Optional[StartSpeechSynthesisTaskRequestBodyTextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextType' }})
    voice_id: StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    

@dataclass
class StartSpeechSynthesisTaskRequest:
    headers: StartSpeechSynthesisTaskHeaders = field(default=None)
    request: StartSpeechSynthesisTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSpeechSynthesisTaskResponse:
    content_type: str = field(default=None)
    engine_not_supported_exception: Optional[Any] = field(default=None)
    invalid_s3_bucket_exception: Optional[Any] = field(default=None)
    invalid_s3_key_exception: Optional[Any] = field(default=None)
    invalid_sample_rate_exception: Optional[Any] = field(default=None)
    invalid_sns_topic_arn_exception: Optional[Any] = field(default=None)
    invalid_ssml_exception: Optional[Any] = field(default=None)
    language_not_supported_exception: Optional[Any] = field(default=None)
    lexicon_not_found_exception: Optional[Any] = field(default=None)
    marks_not_supported_for_format_exception: Optional[Any] = field(default=None)
    service_failure_exception: Optional[Any] = field(default=None)
    ssml_marks_not_supported_for_text_type_exception: Optional[Any] = field(default=None)
    start_speech_synthesis_task_output: Optional[shared.StartSpeechSynthesisTaskOutput] = field(default=None)
    status_code: int = field(default=None)
    text_length_exceeded_exception: Optional[Any] = field(default=None)
    
