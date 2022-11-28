import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Detail } from "./detail";
import { ItemRouting } from "./itemrouting";
export declare class Report extends SpeakeasyBase {
    destinationCount?: number;
    destinations?: Destination[];
    errorCount?: number;
    errors?: Detail[];
    id: string;
    reportItemCount?: number;
    routing?: ItemRouting[];
    timestamp?: string;
    topic?: string;
    warningCount?: number;
    warnings?: Detail[];
}
