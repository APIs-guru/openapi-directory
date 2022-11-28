import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accesscontextmanagerAccessPoliciesAccessLevelsCreate - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
    **/
    accesscontextmanagerAccessPoliciesAccessLevelsCreate(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse>;
    /**
     * accesscontextmanagerAccessPoliciesAccessLevelsList - Lists all access levels for an access policy.
    **/
    accesscontextmanagerAccessPoliciesAccessLevelsList(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse>;
    /**
     * accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
    **/
    accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse>;
    /**
     * accesscontextmanagerAccessPoliciesCreate - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
    **/
    accesscontextmanagerAccessPoliciesCreate(req: operations.AccesscontextmanagerAccessPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesCreateResponse>;
    /**
     * accesscontextmanagerAccessPoliciesGetIamPolicy - Gets the IAM policy for the specified Access Context Manager access policy.
    **/
    accesscontextmanagerAccessPoliciesGetIamPolicy(req: operations.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse>;
    /**
     * accesscontextmanagerAccessPoliciesList - Lists all access policies in an organization.
    **/
    accesscontextmanagerAccessPoliciesList(req: operations.AccesscontextmanagerAccessPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesListResponse>;
    /**
     * accesscontextmanagerAccessPoliciesServicePerimetersCommit - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
    **/
    accesscontextmanagerAccessPoliciesServicePerimetersCommit(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse>;
    /**
     * accesscontextmanagerAccessPoliciesServicePerimetersCreate - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
    **/
    accesscontextmanagerAccessPoliciesServicePerimetersCreate(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse>;
    /**
     * accesscontextmanagerAccessPoliciesServicePerimetersList - Lists all service perimeters for an access policy.
    **/
    accesscontextmanagerAccessPoliciesServicePerimetersList(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse>;
    /**
     * accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
    **/
    accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse>;
    /**
     * accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
    **/
    accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse>;
    /**
     * accesscontextmanagerAccessPoliciesSetIamPolicy - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.
    **/
    accesscontextmanagerAccessPoliciesSetIamPolicy(req: operations.AccesscontextmanagerAccessPoliciesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesSetIamPolicyResponse>;
}
