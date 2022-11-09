import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveFollowersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=followers" })
  followers: string;
}
