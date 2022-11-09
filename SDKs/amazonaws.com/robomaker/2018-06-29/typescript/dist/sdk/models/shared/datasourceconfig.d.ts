import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a data source.
**/
export declare class DataSourceConfig extends SpeakeasyBase {
    name: string;
    s3Bucket: string;
    s3Keys: string[];
}
