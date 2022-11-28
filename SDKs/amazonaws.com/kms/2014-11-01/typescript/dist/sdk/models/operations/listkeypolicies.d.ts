import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListKeyPoliciesQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare enum ListKeyPoliciesXAmzTargetEnum {
    TrentServiceListKeyPolicies = "TrentService.ListKeyPolicies"
}
export declare class ListKeyPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListKeyPoliciesXAmzTargetEnum;
}
export declare class ListKeyPoliciesRequest extends SpeakeasyBase {
    queryParams: ListKeyPoliciesQueryParams;
    headers: ListKeyPoliciesHeaders;
    request: shared.ListKeyPoliciesRequest;
}
export declare class ListKeyPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    listKeyPoliciesResponse?: shared.ListKeyPoliciesResponse;
    notFoundException?: any;
    statusCode: number;
}
