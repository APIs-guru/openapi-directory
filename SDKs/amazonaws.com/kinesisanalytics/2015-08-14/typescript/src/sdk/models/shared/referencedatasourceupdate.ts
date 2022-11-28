import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceUpdate } from "./s3referencedatasourceupdate";



// ReferenceDataSourceUpdate
/** 
 * When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
**/
export class ReferenceDataSourceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId: string;

  @SpeakeasyMetadata({ data: "json, name=ReferenceSchemaUpdate" })
  referenceSchemaUpdate?: SourceSchema;

  @SpeakeasyMetadata({ data: "json, name=S3ReferenceDataSourceUpdate" })
  s3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  @SpeakeasyMetadata({ data: "json, name=TableNameUpdate" })
  tableNameUpdate?: string;
}
