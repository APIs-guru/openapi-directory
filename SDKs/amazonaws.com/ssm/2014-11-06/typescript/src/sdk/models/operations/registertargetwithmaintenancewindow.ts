import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterTargetWithMaintenanceWindowXAmzTargetEnum {
    AmazonSsmRegisterTargetWithMaintenanceWindow = "AmazonSSM.RegisterTargetWithMaintenanceWindow"
}


export class RegisterTargetWithMaintenanceWindowHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterTargetWithMaintenanceWindowXAmzTargetEnum;
}


export class RegisterTargetWithMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterTargetWithMaintenanceWindowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterTargetWithMaintenanceWindowRequest;
}


export class RegisterTargetWithMaintenanceWindowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  idempotentParameterMismatch?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  registerTargetWithMaintenanceWindowResult?: shared.RegisterTargetWithMaintenanceWindowResult;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
