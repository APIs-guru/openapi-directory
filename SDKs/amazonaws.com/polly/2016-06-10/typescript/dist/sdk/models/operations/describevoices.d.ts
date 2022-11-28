import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeVoicesEngineEnum {
    Standard = "standard",
    Neural = "neural"
}
export declare enum DescribeVoicesLanguageCodeEnum {
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
export declare class DescribeVoicesQueryParams extends SpeakeasyBase {
    engine?: DescribeVoicesEngineEnum;
    includeAdditionalLanguageCodes?: boolean;
    languageCode?: DescribeVoicesLanguageCodeEnum;
    nextToken?: string;
}
export declare class DescribeVoicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVoicesRequest extends SpeakeasyBase {
    queryParams: DescribeVoicesQueryParams;
    headers: DescribeVoicesHeaders;
}
export declare class DescribeVoicesResponse extends SpeakeasyBase {
    contentType: string;
    describeVoicesOutput?: shared.DescribeVoicesOutput;
    invalidNextTokenException?: any;
    serviceFailureException?: any;
    statusCode: number;
}
