import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
/**
 * Contains the location of validation output.
**/
export declare class SsmOutput extends SpeakeasyBase {
    s3Location?: S3Location;
}
