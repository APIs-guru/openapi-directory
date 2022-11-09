import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudioMembership } from "./studiomembership";


export class ListStudioMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=members", elemType: shared.StudioMembership })
  members?: StudioMembership[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
