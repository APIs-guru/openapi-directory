import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabaseLogStreamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
