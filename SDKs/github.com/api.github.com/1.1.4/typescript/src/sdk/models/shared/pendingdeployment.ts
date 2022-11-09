import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";


export class PendingDeploymentEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PendingDeploymentReviewers extends SpeakeasyBase {
  @Metadata({ data: "json, name=reviewer" })
  reviewer?: any;

  @Metadata({ data: "json, name=type" })
  type?: DeploymentReviewerTypeEnum;
}


// PendingDeployment
/** 
 * Details of a deployment that is waiting for protection rules to pass
**/
export class PendingDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_user_can_approve" })
  currentUserCanApprove: boolean;

  @Metadata({ data: "json, name=environment" })
  environment: PendingDeploymentEnvironment;

  @Metadata({ data: "json, name=reviewers", elemType: shared.PendingDeploymentReviewers })
  reviewers: PendingDeploymentReviewers[];

  @Metadata({ data: "json, name=wait_timer" })
  waitTimer: number;

  @Metadata({ data: "json, name=wait_timer_started_at" })
  waitTimerStartedAt: Date;
}
