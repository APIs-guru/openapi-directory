import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskRemoveFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: string[];
}
