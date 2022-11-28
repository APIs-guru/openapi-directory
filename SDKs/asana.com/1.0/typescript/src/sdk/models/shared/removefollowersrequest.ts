import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: string;
}
