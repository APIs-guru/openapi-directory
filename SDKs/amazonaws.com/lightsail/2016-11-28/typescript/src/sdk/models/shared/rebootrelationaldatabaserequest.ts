import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RebootRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
