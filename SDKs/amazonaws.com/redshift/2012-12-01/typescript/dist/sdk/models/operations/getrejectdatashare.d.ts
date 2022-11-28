import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRejectDataShareActionEnum {
    RejectDataShare = "RejectDataShare"
}
export declare enum GetRejectDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRejectDataShareQueryParams extends SpeakeasyBase {
    action: GetRejectDataShareActionEnum;
    dataShareArn: string;
    version: GetRejectDataShareVersionEnum;
}
export declare class GetRejectDataShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRejectDataShareRequest extends SpeakeasyBase {
    queryParams: GetRejectDataShareQueryParams;
    headers: GetRejectDataShareHeaders;
}
export declare class GetRejectDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
