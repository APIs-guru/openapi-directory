import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBuiltinIntentsLocaleEnum {
    DeDe = "de-DE",
    EnAu = "en-AU",
    EnGb = "en-GB",
    EnIn = "en-IN",
    EnUs = "en-US",
    Es419 = "es-419",
    EsEs = "es-ES",
    EsUs = "es-US",
    FrFr = "fr-FR",
    FrCa = "fr-CA",
    ItIt = "it-IT",
    JaJp = "ja-JP",
    KoKr = "ko-KR"
}
export declare class GetBuiltinIntentsQueryParams extends SpeakeasyBase {
    locale?: GetBuiltinIntentsLocaleEnum;
    maxResults?: number;
    nextToken?: string;
    signatureContains?: string;
}
export declare class GetBuiltinIntentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBuiltinIntentsRequest extends SpeakeasyBase {
    queryParams: GetBuiltinIntentsQueryParams;
    headers: GetBuiltinIntentsHeaders;
}
export declare class GetBuiltinIntentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBuiltinIntentsResponse?: shared.GetBuiltinIntentsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
