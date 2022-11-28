import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members: string;
}
