import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBuiltinSlotTypesLocaleEnum {
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
export declare class GetBuiltinSlotTypesQueryParams extends SpeakeasyBase {
    locale?: GetBuiltinSlotTypesLocaleEnum;
    maxResults?: number;
    nextToken?: string;
    signatureContains?: string;
}
export declare class GetBuiltinSlotTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBuiltinSlotTypesRequest extends SpeakeasyBase {
    queryParams: GetBuiltinSlotTypesQueryParams;
    headers: GetBuiltinSlotTypesHeaders;
}
export declare class GetBuiltinSlotTypesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBuiltinSlotTypesResponse?: shared.GetBuiltinSlotTypesResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
