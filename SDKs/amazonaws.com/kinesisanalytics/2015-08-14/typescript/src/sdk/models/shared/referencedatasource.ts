import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSource } from "./s3referencedatasource";



// ReferenceDataSource
/** 
 * Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
**/
export class ReferenceDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReferenceSchema" })
  referenceSchema: SourceSchema;

  @SpeakeasyMetadata({ data: "json, name=S3ReferenceDataSource" })
  s3ReferenceDataSource?: S3ReferenceDataSource;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
