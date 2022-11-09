import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentSimple
/** 
 * A deployment created as the result of an Actions check run from a workflow that references an environment
**/
export class DeploymentSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=environment" })
  environment: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=original_environment" })
  originalEnvironment?: string;

  @Metadata({ data: "json, name=performed_via_github_app" })
  performedViaGithubApp?: Map<string, any>;

  @Metadata({ data: "json, name=production_environment" })
  productionEnvironment?: boolean;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=task" })
  task: string;

  @Metadata({ data: "json, name=transient_environment" })
  transientEnvironment?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
