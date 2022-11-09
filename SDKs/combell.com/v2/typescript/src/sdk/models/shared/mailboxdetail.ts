import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoForward } from "./autoforward";
import { AutoReply } from "./autoreply";


export class MailboxDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @Metadata({ data: "json, name=auto_forward" })
  autoForward?: AutoForward;

  @Metadata({ data: "json, name=auto_reply" })
  autoReply?: AutoReply;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=max_size" })
  maxSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
