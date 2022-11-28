import { SpeakeasyBase } from "../../../internal/utils";
import { GcrDestination } from "./gcrdestination";
import { GcsDestination } from "./gcsdestination";
/**
 * Output configuration for ModelExport Action.
**/
export declare class ModelExportOutputConfig extends SpeakeasyBase {
    gcrDestination?: GcrDestination;
    gcsDestination?: GcsDestination;
    modelFormat?: string;
    params?: Map<string, string>;
}
