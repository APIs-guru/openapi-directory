import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudApigeeV1InstanceDeploymentStatus } from "./googlecloudapigeev1instancedeploymentstatus";
import { GoogleCloudApigeeV1PodStatus } from "./googlecloudapigeev1podstatus";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict } from "./googlecloudapigeev1deploymentchangereportroutingconflict";


export enum GoogleCloudApigeeV1DeploymentStateEnum {
    RuntimeStateUnspecified = "RUNTIME_STATE_UNSPECIFIED",
    Ready = "READY",
    Progressing = "PROGRESSING",
    Error = "ERROR"
}


export class GoogleCloudApigeeV1Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProxy" })
  apiProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=deployStartTime" })
  deployStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleRpcStatus })
  errors?: GoogleRpcStatus[];

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: GoogleCloudApigeeV1InstanceDeploymentStatus })
  instances?: GoogleCloudApigeeV1InstanceDeploymentStatus[];

  @SpeakeasyMetadata({ data: "json, name=pods", elemType: GoogleCloudApigeeV1PodStatus })
  pods?: GoogleCloudApigeeV1PodStatus[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=routeConflicts", elemType: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict })
  routeConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1DeploymentStateEnum;
}
