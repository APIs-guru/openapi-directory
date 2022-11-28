import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoForward } from "./autoforward";
import { AutoReply } from "./autoreply";



export class MailboxDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_forward" })
  autoForward?: AutoForward;

  @SpeakeasyMetadata({ data: "json, name=auto_reply" })
  autoReply?: AutoReply;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=max_size" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
