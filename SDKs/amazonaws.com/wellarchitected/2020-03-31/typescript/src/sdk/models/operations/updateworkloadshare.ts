import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWorkloadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ShareId" })
  shareId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpdateWorkloadShareHeaders extends SpeakeasyBase {
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

export enum UpdateWorkloadShareRequestBodyPermissionTypeEnum {
    Readonly = "READONLY"
,    Contributor = "CONTRIBUTOR"
}


export class UpdateWorkloadShareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionType" })
  permissionType: UpdateWorkloadShareRequestBodyPermissionTypeEnum;
}


export class UpdateWorkloadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWorkloadSharePathParams;

  @Metadata()
  headers: UpdateWorkloadShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateWorkloadShareRequestBody;
}


export class UpdateWorkloadShareResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateWorkloadShareOutput?: shared.UpdateWorkloadShareOutput;

  @Metadata()
  validationException?: any;
}
