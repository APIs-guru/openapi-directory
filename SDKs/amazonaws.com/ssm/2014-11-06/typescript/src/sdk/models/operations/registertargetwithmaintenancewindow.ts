import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RegisterTargetWithMaintenanceWindowXAmzTargetEnum {
    AmazonSsmRegisterTargetWithMaintenanceWindow = "AmazonSSM.RegisterTargetWithMaintenanceWindow"
}


export class RegisterTargetWithMaintenanceWindowHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RegisterTargetWithMaintenanceWindowXAmzTargetEnum;
}


export class RegisterTargetWithMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterTargetWithMaintenanceWindowHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegisterTargetWithMaintenanceWindowRequest;
}


export class RegisterTargetWithMaintenanceWindowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  idempotentParameterMismatch?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  registerTargetWithMaintenanceWindowResult?: shared.RegisterTargetWithMaintenanceWindowResult;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
