import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAccessPolicyPathParams extends SpeakeasyBase {
    accessPolicyId: string;
}
export declare class UpdateAccessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
export declare class UpdateAccessPolicyRequestBodyAccessPolicyIdentity extends SpeakeasyBase {
    group?: shared.GroupIdentity;
    iamRole?: shared.IamRoleIdentity;
    iamUser?: shared.IamUserIdentity;
    user?: shared.UserIdentity;
}
export declare enum UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum {
    Administrator = "ADMINISTRATOR",
    Viewer = "VIEWER"
}
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export declare class UpdateAccessPolicyRequestBodyAccessPolicyResource extends SpeakeasyBase {
    portal?: shared.PortalResource;
    project?: shared.ProjectResource;
}
export declare class UpdateAccessPolicyRequestBody extends SpeakeasyBase {
    accessPolicyIdentity: UpdateAccessPolicyRequestBodyAccessPolicyIdentity;
    accessPolicyPermission: UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
    accessPolicyResource: UpdateAccessPolicyRequestBodyAccessPolicyResource;
    clientToken?: string;
}
export declare class UpdateAccessPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateAccessPolicyPathParams;
    headers: UpdateAccessPolicyHeaders;
    request: UpdateAccessPolicyRequestBody;
}
export declare class UpdateAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAccessPolicyResponse?: Map<string, any>;
}
