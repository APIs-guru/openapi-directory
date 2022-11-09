import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetachManagedPolicyFromPermissionSetXAmzTargetEnum {
    SwbExternalServiceDetachManagedPolicyFromPermissionSet = "SWBExternalService.DetachManagedPolicyFromPermissionSet"
}


export class DetachManagedPolicyFromPermissionSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetachManagedPolicyFromPermissionSetXAmzTargetEnum;
}


export class DetachManagedPolicyFromPermissionSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetachManagedPolicyFromPermissionSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetachManagedPolicyFromPermissionSetRequest;
}


export class DetachManagedPolicyFromPermissionSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  detachManagedPolicyFromPermissionSetResponse?: Map<string, any>;

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
