import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    InboundServiceUnspecified = "INBOUND_SERVICE_UNSPECIFIED"
,    InboundServiceMail = "INBOUND_SERVICE_MAIL"
,    InboundServiceMailBounce = "INBOUND_SERVICE_MAIL_BOUNCE"
,    InboundServiceXmppError = "INBOUND_SERVICE_XMPP_ERROR"
,    InboundServiceXmppMessage = "INBOUND_SERVICE_XMPP_MESSAGE"
,    InboundServiceXmppSubscribe = "INBOUND_SERVICE_XMPP_SUBSCRIBE"
,    InboundServiceXmppPresence = "INBOUND_SERVICE_XMPP_PRESENCE"
,    InboundServiceChannelPresence = "INBOUND_SERVICE_CHANNEL_PRESENCE"
,    InboundServiceWarmup = "INBOUND_SERVICE_WARMUP"
}

export enum VersionServingStatusEnum {
    ServingStatusUnspecified = "SERVING_STATUS_UNSPECIFIED"
,    Serving = "SERVING"
,    Stopped = "STOPPED"
}


// Version
/** 
 * A Version resource is a specific set of source code and configuration files that are deployed into a service.
**/
export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiConfig" })
  apiConfig?: ApiConfigHandler;

  @Metadata({ data: "json, name=appEngineApis" })
  appEngineApis?: boolean;

  @Metadata({ data: "json, name=automaticScaling" })
  automaticScaling?: AutomaticScaling;

  @Metadata({ data: "json, name=basicScaling" })
  basicScaling?: BasicScaling;

  @Metadata({ data: "json, name=betaSettings" })
  betaSettings?: Map<string, string>;

  @Metadata({ data: "json, name=buildEnvVariables" })
  buildEnvVariables?: Map<string, string>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=defaultExpiration" })
  defaultExpiration?: string;

  @Metadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @Metadata({ data: "json, name=diskUsageBytes" })
  diskUsageBytes?: string;

  @Metadata({ data: "json, name=endpointsApiService" })
  endpointsApiService?: EndpointsApiService;

  @Metadata({ data: "json, name=entrypoint" })
  entrypoint?: Entrypoint;

  @Metadata({ data: "json, name=env" })
  env?: string;

  @Metadata({ data: "json, name=envVariables" })
  envVariables?: Map<string, string>;

  @Metadata({ data: "json, name=errorHandlers", elemType: shared.ErrorHandler })
  errorHandlers?: ErrorHandler[];

  @Metadata({ data: "json, name=handlers", elemType: shared.UrlMap })
  handlers?: UrlMap[];

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheck;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inboundServices" })
  inboundServices?: VersionInboundServicesEnum[];

  @Metadata({ data: "json, name=instanceClass" })
  instanceClass?: string;

  @Metadata({ data: "json, name=libraries", elemType: shared.Library })
  libraries?: Library[];

  @Metadata({ data: "json, name=livenessCheck" })
  livenessCheck?: LivenessCheck;

  @Metadata({ data: "json, name=manualScaling" })
  manualScaling?: ManualScaling;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: Network;

  @Metadata({ data: "json, name=nobuildFilesRegex" })
  nobuildFilesRegex?: string;

  @Metadata({ data: "json, name=readinessCheck" })
  readinessCheck?: ReadinessCheck;

  @Metadata({ data: "json, name=resources" })
  resources?: Resources;

  @Metadata({ data: "json, name=runtime" })
  runtime?: string;

  @Metadata({ data: "json, name=runtimeApiVersion" })
  runtimeApiVersion?: string;

  @Metadata({ data: "json, name=runtimeChannel" })
  runtimeChannel?: string;

  @Metadata({ data: "json, name=runtimeMainExecutablePath" })
  runtimeMainExecutablePath?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=servingStatus" })
  servingStatus?: VersionServingStatusEnum;

  @Metadata({ data: "json, name=threadsafe" })
  threadsafe?: boolean;

  @Metadata({ data: "json, name=versionUrl" })
  versionUrl?: string;

  @Metadata({ data: "json, name=vm" })
  vm?: boolean;

  @Metadata({ data: "json, name=vpcAccessConnector" })
  vpcAccessConnector?: VpcAccessConnector;

  @Metadata({ data: "json, name=zones" })
  zones?: string[];
}
