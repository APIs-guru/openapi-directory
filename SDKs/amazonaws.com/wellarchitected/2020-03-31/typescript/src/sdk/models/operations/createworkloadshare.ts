import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateWorkloadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class CreateWorkloadShareHeaders extends SpeakeasyBase {
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

export enum CreateWorkloadShareRequestBodyPermissionTypeEnum {
    Readonly = "READONLY"
,    Contributor = "CONTRIBUTOR"
}


export class CreateWorkloadShareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=PermissionType" })
  permissionType: CreateWorkloadShareRequestBodyPermissionTypeEnum;

  @Metadata({ data: "json, name=SharedWith" })
  sharedWith: string;
}


export class CreateWorkloadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateWorkloadSharePathParams;

  @Metadata()
  headers: CreateWorkloadShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateWorkloadShareRequestBody;
}


export class CreateWorkloadShareResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createWorkloadShareOutput?: shared.CreateWorkloadShareOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
