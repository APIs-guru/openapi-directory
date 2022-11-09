import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterTaskFromMaintenanceWindowXAmzTargetEnum {
    AmazonSsmDeregisterTaskFromMaintenanceWindow = "AmazonSSM.DeregisterTaskFromMaintenanceWindow"
}


export class DeregisterTaskFromMaintenanceWindowHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterTaskFromMaintenanceWindowXAmzTargetEnum;
}


export class DeregisterTaskFromMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterTaskFromMaintenanceWindowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterTaskFromMaintenanceWindowRequest;
}


export class DeregisterTaskFromMaintenanceWindowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterTaskFromMaintenanceWindowResult?: shared.DeregisterTaskFromMaintenanceWindowResult;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
