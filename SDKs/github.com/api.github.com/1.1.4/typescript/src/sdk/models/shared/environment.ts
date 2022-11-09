import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentBranchPolicy } from "./deploymentbranchpolicy";
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";


export class EnvironmentProtectionRules1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=wait_timer" })
  waitTimer?: number;
}


export class EnvironmentProtectionRules2Reviewers extends SpeakeasyBase {
  @Metadata({ data: "json, name=reviewer" })
  reviewer?: any;

  @Metadata({ data: "json, name=type" })
  type?: DeploymentReviewerTypeEnum;
}


export class EnvironmentProtectionRules2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=reviewers", elemType: shared.EnvironmentProtectionRules2Reviewers })
  reviewers?: EnvironmentProtectionRules2Reviewers[];

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class EnvironmentProtectionRules3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// Environment
/** 
 * Details of a deployment environment
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=deployment_branch_policy" })
  deploymentBranchPolicy?: DeploymentBranchPolicy;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=protection_rules" })
  protectionRules?: any[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
