import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamCompact } from "./teamcompact";
import { UserCompact } from "./usercompact";


export class TeamMembershipCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=is_guest" })
  isGuest?: boolean;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=team" })
  team?: TeamCompact;

  @Metadata({ data: "json, name=user" })
  user?: UserCompact;
}
