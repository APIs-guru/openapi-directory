import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskRemoveFollowersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=followers" })
  followers: string[];
}
