import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetInlinePolicyForPermissionSetXAmzTargetEnum {
    SwbExternalServiceGetInlinePolicyForPermissionSet = "SWBExternalService.GetInlinePolicyForPermissionSet"
}


export class GetInlinePolicyForPermissionSetHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetInlinePolicyForPermissionSetXAmzTargetEnum;
}


export class GetInlinePolicyForPermissionSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetInlinePolicyForPermissionSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetInlinePolicyForPermissionSetRequest;
}


export class GetInlinePolicyForPermissionSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getInlinePolicyForPermissionSetResponse?: shared.GetInlinePolicyForPermissionSetResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
