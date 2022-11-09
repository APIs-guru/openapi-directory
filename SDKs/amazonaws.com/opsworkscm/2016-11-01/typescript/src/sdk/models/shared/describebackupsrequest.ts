import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeBackupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;
}
