import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccessPolicyHeaders extends SpeakeasyBase {
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
export declare class CreateAccessPolicyRequestBodyAccessPolicyIdentity extends SpeakeasyBase {
    group?: shared.GroupIdentity;
    iamRole?: shared.IamRoleIdentity;
    iamUser?: shared.IamUserIdentity;
    user?: shared.UserIdentity;
}
export declare enum CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum {
    Administrator = "ADMINISTRATOR",
    Viewer = "VIEWER"
}
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export declare class CreateAccessPolicyRequestBodyAccessPolicyResource extends SpeakeasyBase {
    portal?: shared.PortalResource;
    project?: shared.ProjectResource;
}
export declare class CreateAccessPolicyRequestBody extends SpeakeasyBase {
    accessPolicyIdentity: CreateAccessPolicyRequestBodyAccessPolicyIdentity;
    accessPolicyPermission: CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
    accessPolicyResource: CreateAccessPolicyRequestBodyAccessPolicyResource;
    clientToken?: string;
    tags?: Map<string, string>;
}
export declare class CreateAccessPolicyRequest extends SpeakeasyBase {
    headers: CreateAccessPolicyHeaders;
    request: CreateAccessPolicyRequestBody;
}
export declare class CreateAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    createAccessPolicyResponse?: shared.CreateAccessPolicyResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
