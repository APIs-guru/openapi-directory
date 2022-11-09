import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMaintenanceWindowTaskXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowTask = "AmazonSSM.GetMaintenanceWindowTask"
}


export class GetMaintenanceWindowTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMaintenanceWindowTaskXAmzTargetEnum;
}


export class GetMaintenanceWindowTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMaintenanceWindowTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMaintenanceWindowTaskRequest;
}


export class GetMaintenanceWindowTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  getMaintenanceWindowTaskResult?: shared.GetMaintenanceWindowTaskResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
