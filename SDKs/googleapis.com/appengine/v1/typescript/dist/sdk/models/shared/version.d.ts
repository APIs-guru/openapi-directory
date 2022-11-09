import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiConfigHandler } from "./apiconfighandler";
import { AutomaticScaling } from "./automaticscaling";
import { BasicScaling } from "./basicscaling";
import { Deployment } from "./deployment";
import { EndpointsApiService } from "./endpointsapiservice";
import { Entrypoint } from "./entrypoint";
import { ErrorHandler } from "./errorhandler";
import { UrlMap } from "./urlmap";
import { HealthCheck } from "./healthcheck";
import { Library } from "./library";
import { LivenessCheck } from "./livenesscheck";
import { ManualScaling } from "./manualscaling";
import { Network } from "./network";
import { ReadinessCheck } from "./readinesscheck";
import { Resources } from "./resources";
import { VpcAccessConnector } from "./vpcaccessconnector";
export declare enum VersionInboundServicesEnum {
    InboundServiceUnspecified = "INBOUND_SERVICE_UNSPECIFIED",
    InboundServiceMail = "INBOUND_SERVICE_MAIL",
    InboundServiceMailBounce = "INBOUND_SERVICE_MAIL_BOUNCE",
    InboundServiceXmppError = "INBOUND_SERVICE_XMPP_ERROR",
    InboundServiceXmppMessage = "INBOUND_SERVICE_XMPP_MESSAGE",
    InboundServiceXmppSubscribe = "INBOUND_SERVICE_XMPP_SUBSCRIBE",
    InboundServiceXmppPresence = "INBOUND_SERVICE_XMPP_PRESENCE",
    InboundServiceChannelPresence = "INBOUND_SERVICE_CHANNEL_PRESENCE",
    InboundServiceWarmup = "INBOUND_SERVICE_WARMUP"
}
export declare enum VersionServingStatusEnum {
    ServingStatusUnspecified = "SERVING_STATUS_UNSPECIFIED",
    Serving = "SERVING",
    Stopped = "STOPPED"
}
/**
 * A Version resource is a specific set of source code and configuration files that are deployed into a service.
**/
export declare class Version extends SpeakeasyBase {
    apiConfig?: ApiConfigHandler;
    appEngineApis?: boolean;
    automaticScaling?: AutomaticScaling;
    basicScaling?: BasicScaling;
    betaSettings?: Map<string, string>;
    buildEnvVariables?: Map<string, string>;
    createTime?: string;
    createdBy?: string;
    defaultExpiration?: string;
    deployment?: Deployment;
    diskUsageBytes?: string;
    endpointsApiService?: EndpointsApiService;
    entrypoint?: Entrypoint;
    env?: string;
    envVariables?: Map<string, string>;
    errorHandlers?: ErrorHandler[];
    handlers?: UrlMap[];
    healthCheck?: HealthCheck;
    id?: string;
    inboundServices?: VersionInboundServicesEnum[];
    instanceClass?: string;
    libraries?: Library[];
    livenessCheck?: LivenessCheck;
    manualScaling?: ManualScaling;
    name?: string;
    network?: Network;
    nobuildFilesRegex?: string;
    readinessCheck?: ReadinessCheck;
    resources?: Resources;
    runtime?: string;
    runtimeApiVersion?: string;
    runtimeChannel?: string;
    runtimeMainExecutablePath?: string;
    serviceAccount?: string;
    servingStatus?: VersionServingStatusEnum;
    threadsafe?: boolean;
    versionUrl?: string;
    vm?: boolean;
    vpcAccessConnector?: VpcAccessConnector;
    zones?: string[];
}
