import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Header } from "./header";
import { Record } from "./record";
import { Error } from "./error";
/**
 * The complex type that defines that defines the report.
**/
export declare class Report extends SpeakeasyBase {
    dimensionMetadata?: Metadata[];
    endDate?: string;
    header?: Header;
    lastUpdatedDate?: string;
    records?: Record[];
    startDate?: string;
    warnings?: Error[];
}
