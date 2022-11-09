import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeReplicationConfigurationTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeReplicationConfigurationTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeReplicationConfigurationTemplatesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    replicationConfigurationTemplateIDs: string[];
}
export declare class DescribeReplicationConfigurationTemplatesRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationConfigurationTemplatesQueryParams;
    headers: DescribeReplicationConfigurationTemplatesHeaders;
    request: DescribeReplicationConfigurationTemplatesRequestBody;
}
export declare class DescribeReplicationConfigurationTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationConfigurationTemplatesResponse?: shared.DescribeReplicationConfigurationTemplatesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
