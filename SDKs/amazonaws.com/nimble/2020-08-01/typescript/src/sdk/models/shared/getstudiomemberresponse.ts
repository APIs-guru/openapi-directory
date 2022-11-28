import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioMembership } from "./studiomembership";



export class GetStudioMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: StudioMembership;
}
