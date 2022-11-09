import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";


// Status
/** 
 * The status of a commit.
**/
export class Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=context" })
  context: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=creator" })
  creator: SimpleUser;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=target_url" })
  targetUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
