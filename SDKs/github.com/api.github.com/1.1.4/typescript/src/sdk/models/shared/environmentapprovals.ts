import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleUser } from "./simpleuser";


export class EnvironmentApprovalsEnvironments extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum EnvironmentApprovalsStateEnum {
    Approved = "approved"
,    Rejected = "rejected"
}


// EnvironmentApprovals
/** 
 * An entry in the reviews log for environment deployments
**/
export class EnvironmentApprovals extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment: string;

  @Metadata({ data: "json, name=environments", elemType: shared.EnvironmentApprovalsEnvironments })
  environments: EnvironmentApprovalsEnvironments[];

  @Metadata({ data: "json, name=state" })
  state: EnvironmentApprovalsStateEnum;

  @Metadata({ data: "json, name=user" })
  user: SimpleUser;
}
