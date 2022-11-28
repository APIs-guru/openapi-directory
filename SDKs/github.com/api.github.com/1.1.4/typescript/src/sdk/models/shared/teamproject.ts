import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";



export class TeamProjectPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin: boolean;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read: boolean;

  @SpeakeasyMetadata({ data: "json, name=write" })
  write: boolean;
}


// TeamProject
/** 
 * A team's access to a project.
**/
export class TeamProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=columns_url" })
  columnsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=organization_permission" })
  organizationPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_url" })
  ownerUrl: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: TeamProjectPermissions;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
