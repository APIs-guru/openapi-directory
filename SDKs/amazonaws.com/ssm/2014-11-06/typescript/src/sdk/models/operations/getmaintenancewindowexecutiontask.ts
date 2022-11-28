import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMaintenanceWindowExecutionTaskXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowExecutionTask = "AmazonSSM.GetMaintenanceWindowExecutionTask"
}


export class GetMaintenanceWindowExecutionTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMaintenanceWindowExecutionTaskXAmzTargetEnum;
}


export class GetMaintenanceWindowExecutionTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetMaintenanceWindowExecutionTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetMaintenanceWindowExecutionTaskRequest;
}


export class GetMaintenanceWindowExecutionTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  getMaintenanceWindowExecutionTaskResult?: shared.GetMaintenanceWindowExecutionTaskResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
