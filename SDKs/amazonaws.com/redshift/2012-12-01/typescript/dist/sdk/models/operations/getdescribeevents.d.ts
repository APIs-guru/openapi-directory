import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum GetDescribeEventsSourceTypeEnum {
    Cluster = "cluster",
    ClusterParameterGroup = "cluster-parameter-group",
    ClusterSecurityGroup = "cluster-security-group",
    ClusterSnapshot = "cluster-snapshot",
    ScheduledAction = "scheduled-action"
}
export declare enum GetDescribeEventsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeEventsQueryParams extends SpeakeasyBase {
    action: GetDescribeEventsActionEnum;
    duration?: number;
    endTime?: Date;
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
