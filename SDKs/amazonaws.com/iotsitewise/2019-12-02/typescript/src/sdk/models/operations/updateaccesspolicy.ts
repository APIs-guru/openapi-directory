import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAccessPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyId" })
  accessPolicyId: string;
}


export class UpdateAccessPolicyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateAccessPolicyRequestBodyAccessPolicyIdentity
/** 
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
export class UpdateAccessPolicyRequestBodyAccessPolicyIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: shared.GroupIdentity;

  @Metadata({ data: "json, name=iamRole" })
  iamRole?: shared.IamRoleIdentity;

  @Metadata({ data: "json, name=iamUser" })
  iamUser?: shared.IamUserIdentity;

  @Metadata({ data: "json, name=user" })
  user?: shared.UserIdentity;
}

export enum UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum {
    Administrator = "ADMINISTRATOR"
,    Viewer = "VIEWER"
}


// UpdateAccessPolicyRequestBodyAccessPolicyResource
/** 
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export class UpdateAccessPolicyRequestBodyAccessPolicyResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=portal" })
  portal?: shared.PortalResource;

  @Metadata({ data: "json, name=project" })
  project?: shared.ProjectResource;
}


export class UpdateAccessPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyIdentity" })
  accessPolicyIdentity: UpdateAccessPolicyRequestBodyAccessPolicyIdentity;

  @Metadata({ data: "json, name=accessPolicyPermission" })
  accessPolicyPermission: UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum;

  @Metadata({ data: "json, name=accessPolicyResource" })
  accessPolicyResource: UpdateAccessPolicyRequestBodyAccessPolicyResource;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class UpdateAccessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAccessPolicyPathParams;

  @Metadata()
  headers: UpdateAccessPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAccessPolicyRequestBody;
}


export class UpdateAccessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateAccessPolicyResponse?: Map<string, any>;
}
