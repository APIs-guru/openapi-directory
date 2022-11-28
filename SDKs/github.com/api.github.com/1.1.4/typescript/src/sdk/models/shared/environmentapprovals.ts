import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";



export class EnvironmentApprovalsEnvironments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum EnvironmentApprovalsStateEnum {
    Approved = "approved",
    Rejected = "rejected"
}


// EnvironmentApprovals
/** 
 * An entry in the reviews log for environment deployments
**/
export class EnvironmentApprovals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=environments", elemType: EnvironmentApprovalsEnvironments })
  environments: EnvironmentApprovalsEnvironments[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EnvironmentApprovalsStateEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: SimpleUser;
}
