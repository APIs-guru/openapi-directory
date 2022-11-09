import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseLogEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @Metadata({ data: "json, name=startFromHead" })
  startFromHead?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}
