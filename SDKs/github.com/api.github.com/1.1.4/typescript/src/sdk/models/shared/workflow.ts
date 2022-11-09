import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WorkflowStateEnum {
    Active = "active"
,    Deleted = "deleted"
}


// Workflow
/** 
 * A GitHub Actions workflow
**/
export class Workflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=badge_url" })
  badgeUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=state" })
  state: WorkflowStateEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
