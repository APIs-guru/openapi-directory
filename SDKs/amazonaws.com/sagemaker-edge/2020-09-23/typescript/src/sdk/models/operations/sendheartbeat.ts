import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendHeartbeatHeaders extends SpeakeasyBase {
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
}


export class SendHeartbeatRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentMetrics", elemType: shared.EdgeMetric })
  agentMetrics?: shared.EdgeMetric[];

  @Metadata({ data: "json, name=AgentVersion" })
  agentVersion: string;

  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @Metadata({ data: "json, name=Models", elemType: shared.Model })
  models?: shared.Model[];
}


export class SendHeartbeatRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendHeartbeatHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendHeartbeatRequestBody;
}


export class SendHeartbeatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  statusCode: number;
}
