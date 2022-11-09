import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableEnhancedMonitoringXAmzTargetEnum {
    Kinesis20131202DisableEnhancedMonitoring = "Kinesis_20131202.DisableEnhancedMonitoring"
}


export class DisableEnhancedMonitoringHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableEnhancedMonitoringXAmzTargetEnum;
}


export class DisableEnhancedMonitoringRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableEnhancedMonitoringHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableEnhancedMonitoringInput;
}


export class DisableEnhancedMonitoringResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enhancedMonitoringOutput?: shared.EnhancedMonitoringOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
