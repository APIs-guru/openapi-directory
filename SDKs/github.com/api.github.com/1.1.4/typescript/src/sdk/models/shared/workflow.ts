import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkflowStateEnum {
    Active = "active",
    Deleted = "deleted"
}


// Workflow
/** 
 * A GitHub Actions workflow
**/
export class Workflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badge_url" })
  badgeUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: WorkflowStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
