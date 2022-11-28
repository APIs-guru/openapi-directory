import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartRelationalDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
