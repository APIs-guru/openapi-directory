import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelMaintenanceWindowExecutionXAmzTargetEnum {
    AmazonSsmCancelMaintenanceWindowExecution = "AmazonSSM.CancelMaintenanceWindowExecution"
}


export class CancelMaintenanceWindowExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelMaintenanceWindowExecutionXAmzTargetEnum;
}


export class CancelMaintenanceWindowExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelMaintenanceWindowExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelMaintenanceWindowExecutionRequest;
}


export class CancelMaintenanceWindowExecutionResponse extends SpeakeasyBase {
  @Metadata()
  cancelMaintenanceWindowExecutionResult?: shared.CancelMaintenanceWindowExecutionResult;

  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
