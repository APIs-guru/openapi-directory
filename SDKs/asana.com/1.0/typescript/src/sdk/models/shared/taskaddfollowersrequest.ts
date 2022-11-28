import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskAddFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: string[];
}
