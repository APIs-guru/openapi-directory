import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMaintenanceWindowExecutionTaskXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowExecutionTask = "AmazonSSM.GetMaintenanceWindowExecutionTask"
}


export class GetMaintenanceWindowExecutionTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMaintenanceWindowExecutionTaskXAmzTargetEnum;
}


export class GetMaintenanceWindowExecutionTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMaintenanceWindowExecutionTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMaintenanceWindowExecutionTaskRequest;
}


export class GetMaintenanceWindowExecutionTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  getMaintenanceWindowExecutionTaskResult?: shared.GetMaintenanceWindowExecutionTaskResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
