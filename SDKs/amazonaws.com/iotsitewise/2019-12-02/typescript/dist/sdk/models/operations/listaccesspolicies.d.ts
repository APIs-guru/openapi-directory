import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAccessPoliciesIdentityTypeEnum {
    User = "USER",
    Group = "GROUP",
    Iam = "IAM"
}
export declare enum ListAccessPoliciesResourceTypeEnum {
    Portal = "PORTAL",
    Project = "PROJECT"
}
export declare class ListAccessPoliciesQueryParams extends SpeakeasyBase {
    iamArn?: string;
    identityId?: string;
    identityType?: ListAccessPoliciesIdentityTypeEnum;
    maxResults?: number;
    nextToken?: string;
    resourceId?: string;
    resourceType?: ListAccessPoliciesResourceTypeEnum;
}
export declare class ListAccessPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAccessPoliciesRequest extends SpeakeasyBase {
    queryParams: ListAccessPoliciesQueryParams;
    headers: ListAccessPoliciesHeaders;
}
export declare class ListAccessPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAccessPoliciesResponse?: shared.ListAccessPoliciesResponse;
    statusCode: number;
    throttlingException?: any;
}
