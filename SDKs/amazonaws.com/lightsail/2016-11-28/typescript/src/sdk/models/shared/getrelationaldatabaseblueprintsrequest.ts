import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseBlueprintsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
