import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateJobShipmentStateXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateJobShipmentState = "AWSIESnowballJobManagementService.UpdateJobShipmentState"
}


export class UpdateJobShipmentStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateJobShipmentStateXAmzTargetEnum;
}


export class UpdateJobShipmentStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateJobShipmentStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateJobShipmentStateRequest;
}


export class UpdateJobShipmentStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateJobShipmentStateResult?: Map<string, any>;
}
