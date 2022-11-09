import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeValidDbInstanceModificationsActionEnum {
    DescribeValidDbInstanceModifications = "DescribeValidDBInstanceModifications"
}
export declare enum GetDescribeValidDbInstanceModificationsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDescribeValidDbInstanceModificationsQueryParams extends SpeakeasyBase {
    action: GetDescribeValidDbInstanceModificationsActionEnum;
    dbInstanceIdentifier: string;
    version: GetDescribeValidDbInstanceModificationsVersionEnum;
}
export declare class GetDescribeValidDbInstanceModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeValidDbInstanceModificationsRequest extends SpeakeasyBase {
    queryParams: GetDescribeValidDbInstanceModificationsQueryParams;
    headers: GetDescribeValidDbInstanceModificationsHeaders;
}
export declare class GetDescribeValidDbInstanceModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
