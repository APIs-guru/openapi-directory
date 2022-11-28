import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a user-defined Spark routine.
**/
export declare class SparkOptions extends SpeakeasyBase {
    archiveUris?: string[];
    connection?: string;
    containerImage?: string;
    fileUris?: string[];
    jarUris?: string[];
    mainFileUri?: string;
    properties?: Map<string, string>;
    pyFileUris?: string[];
    runtimeVersion?: string;
}
