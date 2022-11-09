import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterTaskWithMaintenanceWindowXAmzTargetEnum {
    AmazonSsmRegisterTaskWithMaintenanceWindow = "AmazonSSM.RegisterTaskWithMaintenanceWindow"
}


export class RegisterTaskWithMaintenanceWindowHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterTaskWithMaintenanceWindowXAmzTargetEnum;
}


export class RegisterTaskWithMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterTaskWithMaintenanceWindowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterTaskWithMaintenanceWindowRequest;
}


export class RegisterTaskWithMaintenanceWindowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  featureNotAvailableException?: any;

  @Metadata()
  idempotentParameterMismatch?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  registerTaskWithMaintenanceWindowResult?: shared.RegisterTaskWithMaintenanceWindowResult;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
