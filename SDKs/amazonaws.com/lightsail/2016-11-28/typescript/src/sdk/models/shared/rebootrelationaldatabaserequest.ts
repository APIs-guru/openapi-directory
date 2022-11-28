import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RebootRelationalDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
