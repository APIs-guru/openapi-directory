import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members: string;
}
