import { SpeakeasyBase } from "../../../internal/utils";
import { TimeZone } from "./timezone";
export declare enum AccountStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    NeedsAttention = "NEEDS_ATTENTION",
    Closed = "CLOSED"
}
/**
 * Representation of an account.
**/
export declare class Account extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    name?: string;
    pendingTasks?: string[];
    premium?: boolean;
    state?: AccountStateEnum;
    timeZone?: TimeZone;
}
