import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteMaintenanceWindowXAmzTargetEnum {
    AmazonSsmDeleteMaintenanceWindow = "AmazonSSM.DeleteMaintenanceWindow"
}


export class DeleteMaintenanceWindowHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteMaintenanceWindowXAmzTargetEnum;
}


export class DeleteMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteMaintenanceWindowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteMaintenanceWindowRequest;
}


export class DeleteMaintenanceWindowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteMaintenanceWindowResult?: shared.DeleteMaintenanceWindowResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
