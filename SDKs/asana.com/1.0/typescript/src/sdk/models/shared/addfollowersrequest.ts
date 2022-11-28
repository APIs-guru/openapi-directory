import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: string;
}
