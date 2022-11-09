import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
