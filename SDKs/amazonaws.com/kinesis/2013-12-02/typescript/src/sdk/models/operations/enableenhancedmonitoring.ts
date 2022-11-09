import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableEnhancedMonitoringXAmzTargetEnum {
    Kinesis20131202EnableEnhancedMonitoring = "Kinesis_20131202.EnableEnhancedMonitoring"
}


export class EnableEnhancedMonitoringHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableEnhancedMonitoringXAmzTargetEnum;
}


export class EnableEnhancedMonitoringRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableEnhancedMonitoringHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableEnhancedMonitoringInput;
}


export class EnableEnhancedMonitoringResponse extends SpeakeasyBase {
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
