import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeOrderableDbInstanceOptionsActionEnum {
    DescribeOrderableDbInstanceOptions = "DescribeOrderableDBInstanceOptions"
}
export declare enum GetDescribeOrderableDbInstanceOptionsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeOrderableDbInstanceOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeOrderableDbInstanceOptionsActionEnum;
    dbInstanceClass?: string;
    engine: string;
    engineVersion?: string;
    licenseModel?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeOrderableDbInstanceOptionsVersionEnum;
    vpc?: boolean;
}
export declare class GetDescribeOrderableDbInstanceOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeOrderableDbInstanceOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeOrderableDbInstanceOptionsQueryParams;
    headers: GetDescribeOrderableDbInstanceOptionsHeaders;
}
export declare class GetDescribeOrderableDbInstanceOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
