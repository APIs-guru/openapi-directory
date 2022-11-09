import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MailboxExportJob } from "./mailboxexportjob";
export declare class ListMailboxExportJobsResponse extends SpeakeasyBase {
    jobs?: MailboxExportJob[];
    nextToken?: string;
}
