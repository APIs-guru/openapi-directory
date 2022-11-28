import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum GetDescribeEventsSourceTypeEnum {
    DbInstance = "db-instance",
    DbParameterGroup = "db-parameter-group",
    DbSecurityGroup = "db-security-group",
    DbSnapshot = "db-snapshot"
}
export declare enum GetDescribeEventsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeEventsQueryParams extends SpeakeasyBase {
    action: GetDescribeEventsActionEnum;
    duration?: number;
    endTime?: Date;
    eventCategories?: string[];
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: GetDescribeEventsSourceTypeEnum;
    startTime?: Date;
    version: GetDescribeEventsVersionEnum;
}
export declare class GetDescribeEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEventsRequest extends SpeakeasyBase {
    queryParams: GetDescribeEventsQueryParams;
    headers: GetDescribeEventsHeaders;
}
export declare class GetDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
