import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddFollowersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=followers" })
  followers: string;
}
