import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
