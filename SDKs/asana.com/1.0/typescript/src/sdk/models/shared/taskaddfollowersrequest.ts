import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskAddFollowersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=followers" })
  followers: string[];
}
