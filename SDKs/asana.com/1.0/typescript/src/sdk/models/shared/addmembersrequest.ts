import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members: string;
}
