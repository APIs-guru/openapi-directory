import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";


export class TeamProjectPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin: boolean;

  @Metadata({ data: "json, name=read" })
  read: boolean;

  @Metadata({ data: "json, name=write" })
  write: boolean;
}


// TeamProject
/** 
 * A team's access to a project.
**/
export class TeamProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=columns_url" })
  columnsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=creator" })
  creator: SimpleUser;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=organization_permission" })
  organizationPermission?: string;

  @Metadata({ data: "json, name=owner_url" })
  ownerUrl: string;

  @Metadata({ data: "json, name=permissions" })
  permissions: TeamProjectPermissions;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
