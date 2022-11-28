import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowExecutionTaskInvocation = "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation"
}


export class GetMaintenanceWindowExecutionTaskInvocationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum;
}


export class GetMaintenanceWindowExecutionTaskInvocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetMaintenanceWindowExecutionTaskInvocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetMaintenanceWindowExecutionTaskInvocationRequest;
}


export class GetMaintenanceWindowExecutionTaskInvocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  getMaintenanceWindowExecutionTaskInvocationResult?: shared.GetMaintenanceWindowExecutionTaskInvocationResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
