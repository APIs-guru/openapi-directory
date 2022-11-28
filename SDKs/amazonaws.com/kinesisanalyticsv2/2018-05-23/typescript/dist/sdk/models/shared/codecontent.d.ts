import { SpeakeasyBase } from "../../../internal/utils";
import { S3ContentLocation } from "./s3contentlocation";
/**
 * Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.
**/
export declare class CodeContent extends SpeakeasyBase {
    s3ContentLocation?: S3ContentLocation;
    textContent?: string;
    zipFileContent?: string;
}
