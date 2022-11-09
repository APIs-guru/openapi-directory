import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabaseEvent } from "./relationaldatabaseevent";


export class GetRelationalDatabaseEventsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=relationalDatabaseEvents", elemType: shared.RelationalDatabaseEvent })
  relationalDatabaseEvents?: RelationalDatabaseEvent[];
}
