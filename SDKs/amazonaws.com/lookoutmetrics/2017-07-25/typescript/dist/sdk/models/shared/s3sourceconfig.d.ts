import { SpeakeasyBase } from "../../../internal/utils";
import { FileFormatDescriptor } from "./fileformatdescriptor";
/**
 * Contains information about the configuration of the S3 bucket that contains source files.
**/
export declare class S3SourceConfig extends SpeakeasyBase {
    fileFormatDescriptor?: FileFormatDescriptor;
    historicalDataPathList?: string[];
    roleArn: string;
    templatedPathList?: string[];
}
