import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1TlsInfo } from "./googlecloudapigeev1tlsinfo";

export enum GoogleCloudApigeeV1TargetServerProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED"
,    Http = "HTTP"
,    Grpc = "GRPC"
}


// GoogleCloudApigeeV1TargetServer
/** 
 * TargetServer configuration. TargetServers are used to decouple a proxy's TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
**/
export class GoogleCloudApigeeV1TargetServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: GoogleCloudApigeeV1TargetServerProtocolEnum;

  @Metadata({ data: "json, name=sSLInfo" })
  sSlInfo?: GoogleCloudApigeeV1TlsInfo;
}
