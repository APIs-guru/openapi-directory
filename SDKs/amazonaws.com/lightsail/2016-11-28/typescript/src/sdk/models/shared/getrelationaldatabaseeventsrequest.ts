import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabaseEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
