import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioMembership } from "./studiomembership";


export class GetStudioMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: StudioMembership;
}
