import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TlsInfo } from "./googlecloudapigeev1tlsinfo";
export declare enum GoogleCloudApigeeV1TargetServerProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    Http = "HTTP",
    Grpc = "GRPC"
}
/**
 * TargetServer configuration. TargetServers are used to decouple a proxy's TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
**/
export declare class GoogleCloudApigeeV1TargetServer extends SpeakeasyBase {
    description?: string;
    host?: string;
    isEnabled?: boolean;
    name?: string;
    port?: number;
    protocol?: GoogleCloudApigeeV1TargetServerProtocolEnum;
    sSlInfo?: GoogleCloudApigeeV1TlsInfo;
}
