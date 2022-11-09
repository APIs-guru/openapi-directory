import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>.
**/
export declare class DatasetSchema extends SpeakeasyBase {
    creationDateTime?: Date;
    lastUpdatedDateTime?: Date;
    name?: string;
    schema?: string;
    schemaArn?: string;
}
