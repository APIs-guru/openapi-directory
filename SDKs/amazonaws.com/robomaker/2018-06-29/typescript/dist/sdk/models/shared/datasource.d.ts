import { SpeakeasyBase } from "../../../internal/utils";
import { S3KeyOutput } from "./s3keyoutput";
/**
 * Information about a data source.
**/
export declare class DataSource extends SpeakeasyBase {
    name?: string;
    s3Bucket?: string;
    s3Keys?: S3KeyOutput[];
}
