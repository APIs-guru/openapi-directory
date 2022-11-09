import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetSchema
/** 
 * Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>.
**/
export class DatasetSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=schemaArn" })
  schemaArn?: string;
}
