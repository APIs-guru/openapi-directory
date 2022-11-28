import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStartDbInstanceActionEnum {
    StartDbInstance = "StartDBInstance"
}
export declare enum GetStartDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStartDbInstanceQueryParams extends SpeakeasyBase {
    action: GetStartDbInstanceActionEnum;
    dbInstanceIdentifier: string;
    version: GetStartDbInstanceVersionEnum;
}
export declare class GetStartDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetStartDbInstanceQueryParams;
    headers: GetStartDbInstanceHeaders;
}
export declare class GetStartDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
