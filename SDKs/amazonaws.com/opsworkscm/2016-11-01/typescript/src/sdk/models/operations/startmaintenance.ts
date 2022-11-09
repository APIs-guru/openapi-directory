import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartMaintenanceXAmzTargetEnum {
    OpsWorksCmV20161101StartMaintenance = "OpsWorksCM_V2016_11_01.StartMaintenance"
}


export class StartMaintenanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartMaintenanceXAmzTargetEnum;
}


export class StartMaintenanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartMaintenanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartMaintenanceRequest;
}


export class StartMaintenanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startMaintenanceResponse?: shared.StartMaintenanceResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
