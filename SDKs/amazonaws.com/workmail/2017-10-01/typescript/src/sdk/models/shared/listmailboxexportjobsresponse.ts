import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MailboxExportJob } from "./mailboxexportjob";


export class ListMailboxExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Jobs", elemType: shared.MailboxExportJob })
  jobs?: MailboxExportJob[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
