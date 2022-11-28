import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MailboxExportJob } from "./mailboxexportjob";



export class ListMailboxExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs", elemType: MailboxExportJob })
  jobs?: MailboxExportJob[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
