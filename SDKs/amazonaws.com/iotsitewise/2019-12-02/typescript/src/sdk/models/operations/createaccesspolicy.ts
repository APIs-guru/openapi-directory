import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAccessPolicyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateAccessPolicyRequestBodyAccessPolicyIdentity
/** 
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
export class CreateAccessPolicyRequestBodyAccessPolicyIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: shared.GroupIdentity;

  @SpeakeasyMetadata({ data: "json, name=iamRole" })
  iamRole?: shared.IamRoleIdentity;

  @SpeakeasyMetadata({ data: "json, name=iamUser" })
  iamUser?: shared.IamUserIdentity;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: shared.UserIdentity;
}

export enum CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum {
    Administrator = "ADMINISTRATOR",
    Viewer = "VIEWER"
}


// CreateAccessPolicyRequestBodyAccessPolicyResource
/** 
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export class CreateAccessPolicyRequestBodyAccessPolicyResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portal" })
  portal?: shared.PortalResource;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: shared.ProjectResource;
}


export class CreateAccessPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyIdentity" })
  accessPolicyIdentity: CreateAccessPolicyRequestBodyAccessPolicyIdentity;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyPermission" })
  accessPolicyPermission: CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyResource" })
  accessPolicyResource: CreateAccessPolicyRequestBodyAccessPolicyResource;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAccessPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAccessPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAccessPolicyRequestBody;
}


export class CreateAccessPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAccessPolicyResponse?: shared.CreateAccessPolicyResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
