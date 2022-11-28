import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetSchemaSummary
/** 
 * Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API.
**/
export class DatasetSchemaSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaArn" })
  schemaArn?: string;
}
