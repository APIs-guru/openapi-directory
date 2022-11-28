import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;
}
