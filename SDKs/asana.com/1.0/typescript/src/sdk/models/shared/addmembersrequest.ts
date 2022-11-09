import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members: string;
}
