import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseLogStreamsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
