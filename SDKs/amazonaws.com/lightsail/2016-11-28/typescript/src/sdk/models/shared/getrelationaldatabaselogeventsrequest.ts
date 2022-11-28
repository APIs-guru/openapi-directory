import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabaseLogEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=startFromHead" })
  startFromHead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
