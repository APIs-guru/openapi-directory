import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingOutput } from "./processingoutput";
/**
 * Configuration for uploading output from the processing container.
**/
export declare class ProcessingOutputConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    outputs: ProcessingOutput[];
}
