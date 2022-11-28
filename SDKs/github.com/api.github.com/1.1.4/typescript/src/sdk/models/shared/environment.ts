import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentBranchPolicy } from "./deploymentbranchpolicy";
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";



export class EnvironmentProtectionRules1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=wait_timer" })
  waitTimer?: number;
}


export class EnvironmentProtectionRules2Reviewers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reviewer" })
  reviewer?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DeploymentReviewerTypeEnum;
}


export class EnvironmentProtectionRules2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=reviewers", elemType: EnvironmentProtectionRules2Reviewers })
  reviewers?: EnvironmentProtectionRules2Reviewers[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class EnvironmentProtectionRules3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// Environment
/** 
 * Details of a deployment environment
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deployment_branch_policy" })
  deploymentBranchPolicy?: DeploymentBranchPolicy;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=protection_rules" })
  protectionRules?: any[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
