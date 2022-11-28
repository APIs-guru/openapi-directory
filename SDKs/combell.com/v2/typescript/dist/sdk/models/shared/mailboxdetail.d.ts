import { SpeakeasyBase } from "../../../internal/utils";
import { AutoForward } from "./autoforward";
import { AutoReply } from "./autoreply";
export declare class MailboxDetail extends SpeakeasyBase {
    actualSize?: number;
    autoForward?: AutoForward;
    autoReply?: AutoReply;
    login?: string;
    maxSize?: number;
    name?: string;
}
