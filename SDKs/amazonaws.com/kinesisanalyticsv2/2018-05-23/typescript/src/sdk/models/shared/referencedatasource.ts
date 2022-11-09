import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSource } from "./s3referencedatasource";


// ReferenceDataSource
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
**/
export class ReferenceDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReferenceSchema" })
  referenceSchema: SourceSchema;

  @Metadata({ data: "json, name=S3ReferenceDataSource" })
  s3ReferenceDataSource?: S3ReferenceDataSource;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
