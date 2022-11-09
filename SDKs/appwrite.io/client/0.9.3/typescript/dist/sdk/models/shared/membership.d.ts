import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Membership
**/
export declare class Membership extends SpeakeasyBase {
    dollarId: string;
    confirm: boolean;
    email: string;
    invited: number;
    joined: number;
    name: string;
    roles: string[];
    teamId: string;
    userId: string;
}
