import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JsonFileCompressionEnum } from "./jsonfilecompressionenum";
/**
 * Contains information about how a source JSON data file should be analyzed.
**/
export declare class JsonFormatDescriptor extends SpeakeasyBase {
    charset?: string;
    fileCompression?: JsonFileCompressionEnum;
}
