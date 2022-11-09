import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterTargetFromMaintenanceWindowXAmzTargetEnum {
    AmazonSsmDeregisterTargetFromMaintenanceWindow = "AmazonSSM.DeregisterTargetFromMaintenanceWindow"
}


export class DeregisterTargetFromMaintenanceWindowHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterTargetFromMaintenanceWindowXAmzTargetEnum;
}


export class DeregisterTargetFromMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterTargetFromMaintenanceWindowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterTargetFromMaintenanceWindowRequest;
}


export class DeregisterTargetFromMaintenanceWindowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterTargetFromMaintenanceWindowResult?: shared.DeregisterTargetFromMaintenanceWindowResult;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  targetInUseException?: any;
}
