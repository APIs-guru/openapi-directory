import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeZone } from "./timezone";

export enum AccountStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Ready = "READY"
,    NeedsAttention = "NEEDS_ATTENTION"
,    Closed = "CLOSED"
}


// Account
/** 
 * Representation of an account.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pendingTasks" })
  pendingTasks?: string[];

  @Metadata({ data: "json, name=premium" })
  premium?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: AccountStateEnum;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: TimeZone;
}
