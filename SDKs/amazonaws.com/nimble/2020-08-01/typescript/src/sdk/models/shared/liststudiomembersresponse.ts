import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioMembership } from "./studiomembership";



export class ListStudioMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: StudioMembership })
  members?: StudioMembership[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
