import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcePoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
    resourceArn: string;
}
export declare class GetResourcePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourcePoliciesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetResourcePoliciesRequest extends SpeakeasyBase {
    queryParams: GetResourcePoliciesQueryParams;
    headers: GetResourcePoliciesHeaders;
    request: GetResourcePoliciesRequestBody;
}
export declare class GetResourcePoliciesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResourcePoliciesOutput?: shared.GetResourcePoliciesOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
