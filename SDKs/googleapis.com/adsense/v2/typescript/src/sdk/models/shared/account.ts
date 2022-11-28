import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeZone } from "./timezone";


export enum AccountStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    NeedsAttention = "NEEDS_ATTENTION",
    Closed = "CLOSED"
}


// Account
/** 
 * Representation of an account.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingTasks" })
  pendingTasks?: string[];

  @SpeakeasyMetadata({ data: "json, name=premium" })
  premium?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AccountStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: TimeZone;
}
