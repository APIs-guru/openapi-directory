import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TlsInfo } from "./googlecloudapigeev1tlsinfo";


export enum GoogleCloudApigeeV1TargetServerProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    Http = "HTTP",
    Grpc = "GRPC"
}


// GoogleCloudApigeeV1TargetServer
/** 
 * TargetServer configuration. TargetServers are used to decouple a proxy's TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
**/
export class GoogleCloudApigeeV1TargetServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: GoogleCloudApigeeV1TargetServerProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sSLInfo" })
  sSlInfo?: GoogleCloudApigeeV1TlsInfo;
}
