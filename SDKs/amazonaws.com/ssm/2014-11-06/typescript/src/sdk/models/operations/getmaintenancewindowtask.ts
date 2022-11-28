import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMaintenanceWindowTaskXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowTask = "AmazonSSM.GetMaintenanceWindowTask"
}


export class GetMaintenanceWindowTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMaintenanceWindowTaskXAmzTargetEnum;
}


export class GetMaintenanceWindowTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetMaintenanceWindowTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetMaintenanceWindowTaskRequest;
}


export class GetMaintenanceWindowTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  getMaintenanceWindowTaskResult?: shared.GetMaintenanceWindowTaskResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
