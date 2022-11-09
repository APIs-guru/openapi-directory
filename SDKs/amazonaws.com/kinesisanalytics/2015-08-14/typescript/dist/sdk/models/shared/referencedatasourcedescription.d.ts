import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSourceDescription } from "./s3referencedatasourcedescription";
/**
 * Describes the reference data source configured for an application.
**/
export declare class ReferenceDataSourceDescription extends SpeakeasyBase {
    referenceId: string;
    referenceSchema?: SourceSchema;
    s3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
    tableName: string;
}
