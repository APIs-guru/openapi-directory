import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeamCompact } from "./teamcompact";
import { UserCompact } from "./usercompact";



export class TeamMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=is_guest" })
  isGuest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: TeamCompact;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;
}
