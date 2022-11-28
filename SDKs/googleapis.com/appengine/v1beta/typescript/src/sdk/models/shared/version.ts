import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum VersionInboundServicesEnum {
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

export enum VersionServingStatusEnum {
    ServingStatusUnspecified = "SERVING_STATUS_UNSPECIFIED",
    Serving = "SERVING",
    Stopped = "STOPPED"
}


// Version
/** 
 * A Version resource is a specific set of source code and configuration files that are deployed into a service.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiConfig" })
  apiConfig?: ApiConfigHandler;

  @SpeakeasyMetadata({ data: "json, name=appEngineApis" })
  appEngineApis?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automaticScaling" })
  automaticScaling?: AutomaticScaling;

  @SpeakeasyMetadata({ data: "json, name=basicScaling" })
  basicScaling?: BasicScaling;

  @SpeakeasyMetadata({ data: "json, name=betaSettings" })
  betaSettings?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=buildEnvVariables" })
  buildEnvVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultExpiration" })
  defaultExpiration?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @SpeakeasyMetadata({ data: "json, name=diskUsageBytes" })
  diskUsageBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointsApiService" })
  endpointsApiService?: EndpointsApiService;

  @SpeakeasyMetadata({ data: "json, name=entrypoint" })
  entrypoint?: Entrypoint;

  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string;

  @SpeakeasyMetadata({ data: "json, name=envVariables" })
  envVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=errorHandlers", elemType: ErrorHandler })
  errorHandlers?: ErrorHandler[];

  @SpeakeasyMetadata({ data: "json, name=handlers", elemType: UrlMap })
  handlers?: UrlMap[];

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheck;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inboundServices" })
  inboundServices?: VersionInboundServicesEnum[];

  @SpeakeasyMetadata({ data: "json, name=instanceClass" })
  instanceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=libraries", elemType: Library })
  libraries?: Library[];

  @SpeakeasyMetadata({ data: "json, name=livenessCheck" })
  livenessCheck?: LivenessCheck;

  @SpeakeasyMetadata({ data: "json, name=manualScaling" })
  manualScaling?: ManualScaling;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: Network;

  @SpeakeasyMetadata({ data: "json, name=nobuildFilesRegex" })
  nobuildFilesRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=readinessCheck" })
  readinessCheck?: ReadinessCheck;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: Resources;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeApiVersion" })
  runtimeApiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeChannel" })
  runtimeChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeMainExecutablePath" })
  runtimeMainExecutablePath?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=servingStatus" })
  servingStatus?: VersionServingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=threadsafe" })
  threadsafe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versionUrl" })
  versionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=vm" })
  vm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vpcAccessConnector" })
  vpcAccessConnector?: VpcAccessConnector;

  @SpeakeasyMetadata({ data: "json, name=zones" })
  zones?: string[];
}
