import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";



export class PendingDeploymentEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PendingDeploymentReviewers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reviewer" })
  reviewer?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DeploymentReviewerTypeEnum;
}


// PendingDeployment
/** 
 * Details of a deployment that is waiting for protection rules to pass
**/
export class PendingDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_user_can_approve" })
  currentUserCanApprove: boolean;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: PendingDeploymentEnvironment;

  @SpeakeasyMetadata({ data: "json, name=reviewers", elemType: PendingDeploymentReviewers })
  reviewers: PendingDeploymentReviewers[];

  @SpeakeasyMetadata({ data: "json, name=wait_timer" })
  waitTimer: number;

  @SpeakeasyMetadata({ data: "json, name=wait_timer_started_at" })
  waitTimerStartedAt: Date;
}
