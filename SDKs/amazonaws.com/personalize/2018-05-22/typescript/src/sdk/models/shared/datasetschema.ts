import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetSchema
/** 
 * Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>.
**/
export class DatasetSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaArn" })
  schemaArn?: string;
}
