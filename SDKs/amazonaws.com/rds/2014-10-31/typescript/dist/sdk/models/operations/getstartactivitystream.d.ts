import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStartActivityStreamActionEnum {
    StartActivityStream = "StartActivityStream"
}
export declare enum GetStartActivityStreamModeEnum {
    Sync = "sync",
    Async = "async"
}
export declare enum GetStartActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStartActivityStreamQueryParams extends SpeakeasyBase {
    action: GetStartActivityStreamActionEnum;
    applyImmediately?: boolean;
    engineNativeAuditFieldsIncluded?: boolean;
    kmsKeyId: string;
    mode: GetStartActivityStreamModeEnum;
    resourceArn: string;
    version: GetStartActivityStreamVersionEnum;
}
export declare class GetStartActivityStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartActivityStreamRequest extends SpeakeasyBase {
    queryParams: GetStartActivityStreamQueryParams;
    headers: GetStartActivityStreamHeaders;
}
export declare class GetStartActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
