import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}
export declare enum GetDescribeOptionGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeOptionGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeOptionGroupsActionEnum;
    engineName?: string;
    majorEngineVersion?: string;
    marker?: string;
    maxRecords?: number;
    optionGroupName?: string;
    version: GetDescribeOptionGroupsVersionEnum;
}
export declare class GetDescribeOptionGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeOptionGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeOptionGroupsQueryParams;
    headers: GetDescribeOptionGroupsHeaders;
}
export declare class GetDescribeOptionGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
