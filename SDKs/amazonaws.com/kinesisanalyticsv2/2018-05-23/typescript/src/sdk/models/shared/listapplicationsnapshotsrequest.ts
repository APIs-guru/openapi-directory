import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListApplicationSnapshotsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
