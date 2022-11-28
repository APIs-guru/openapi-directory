import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";



// Status
/** 
 * The status of a commit.
**/
export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=target_url" })
  targetUrl: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
