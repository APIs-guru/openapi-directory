import { SpeakeasyBase } from "../../../internal/utils";
import { TeamCompact } from "./teamcompact";
import { UserCompact } from "./usercompact";
export declare class TeamMembershipResponse extends SpeakeasyBase {
    gid?: string;
    isGuest?: boolean;
    resourceType?: string;
    team?: TeamCompact;
    user?: UserCompact;
}
