import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseEvent } from "./relationaldatabaseevent";



export class GetRelationalDatabaseEventsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseEvents", elemType: RelationalDatabaseEvent })
  relationalDatabaseEvents?: RelationalDatabaseEvent[];
}
