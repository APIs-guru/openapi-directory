import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentSimple
/** 
 * A deployment created as the result of an Actions check run from a workflow that references an environment
**/
export class DeploymentSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=original_environment" })
  originalEnvironment?: string;

  @SpeakeasyMetadata({ data: "json, name=performed_via_github_app" })
  performedViaGithubApp?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=production_environment" })
  productionEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task: string;

  @SpeakeasyMetadata({ data: "json, name=transient_environment" })
  transientEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
