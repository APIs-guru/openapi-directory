import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeauthorizeDataShareActionEnum {
    DeauthorizeDataShare = "DeauthorizeDataShare"
}
export declare enum GetDeauthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeauthorizeDataShareQueryParams extends SpeakeasyBase {
    action: GetDeauthorizeDataShareActionEnum;
    consumerIdentifier: string;
    dataShareArn: string;
    version: GetDeauthorizeDataShareVersionEnum;
}
export declare class GetDeauthorizeDataShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeauthorizeDataShareRequest extends SpeakeasyBase {
    queryParams: GetDeauthorizeDataShareQueryParams;
    headers: GetDeauthorizeDataShareHeaders;
}
export declare class GetDeauthorizeDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
