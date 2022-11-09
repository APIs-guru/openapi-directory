import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStopActivityStreamActionEnum {
    StopActivityStream = "StopActivityStream"
}
export declare enum GetStopActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStopActivityStreamQueryParams extends SpeakeasyBase {
    action: GetStopActivityStreamActionEnum;
    applyImmediately?: boolean;
    resourceArn: string;
    version: GetStopActivityStreamVersionEnum;
}
export declare class GetStopActivityStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStopActivityStreamRequest extends SpeakeasyBase {
    queryParams: GetStopActivityStreamQueryParams;
    headers: GetStopActivityStreamHeaders;
}
export declare class GetStopActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
