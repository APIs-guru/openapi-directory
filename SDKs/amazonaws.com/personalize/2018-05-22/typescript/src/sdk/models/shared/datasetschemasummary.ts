import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetSchemaSummary
/** 
 * Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API.
**/
export class DatasetSchemaSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schemaArn" })
  schemaArn?: string;
}
