import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudApigeeV1InstanceDeploymentStatus } from "./googlecloudapigeev1instancedeploymentstatus";
import { GoogleCloudApigeeV1PodStatus } from "./googlecloudapigeev1podstatus";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict } from "./googlecloudapigeev1deploymentchangereportroutingconflict";

export enum GoogleCloudApigeeV1DeploymentStateEnum {
    RuntimeStateUnspecified = "RUNTIME_STATE_UNSPECIFIED"
,    Ready = "READY"
,    Progressing = "PROGRESSING"
,    Error = "ERROR"
}


export class GoogleCloudApigeeV1Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProxy" })
  apiProxy?: string;

  @Metadata({ data: "json, name=deployStartTime" })
  deployStartTime?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.GoogleRpcStatus })
  errors?: GoogleRpcStatus[];

  @Metadata({ data: "json, name=instances", elemType: shared.GoogleCloudApigeeV1InstanceDeploymentStatus })
  instances?: GoogleCloudApigeeV1InstanceDeploymentStatus[];

  @Metadata({ data: "json, name=pods", elemType: shared.GoogleCloudApigeeV1PodStatus })
  pods?: GoogleCloudApigeeV1PodStatus[];

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=routeConflicts", elemType: shared.GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict })
  routeConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[];

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1DeploymentStateEnum;
}
