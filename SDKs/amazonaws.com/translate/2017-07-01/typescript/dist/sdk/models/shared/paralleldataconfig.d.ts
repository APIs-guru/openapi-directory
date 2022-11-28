import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataFormatEnum } from "./paralleldataformatenum";
/**
 * Specifies the format and S3 location of the parallel data input file.
**/
export declare class ParallelDataConfig extends SpeakeasyBase {
    format: ParallelDataFormatEnum;
    s3Uri: string;
}
