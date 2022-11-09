import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
