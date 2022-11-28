import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendHeartbeatHeaders extends SpeakeasyBase {
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
}


export class SendHeartbeatRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentMetrics", elemType: shared.EdgeMetric })
  agentMetrics?: shared.EdgeMetric[];

  @SpeakeasyMetadata({ data: "json, name=AgentVersion" })
  agentVersion: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=Models", elemType: shared.Model })
  models?: shared.Model[];
}


export class SendHeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendHeartbeatHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendHeartbeatRequestBody;
}


export class SendHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
