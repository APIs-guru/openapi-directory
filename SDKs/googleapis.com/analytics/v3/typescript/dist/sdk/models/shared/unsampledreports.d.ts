import { SpeakeasyBase } from "../../../internal/utils";
import { UnsampledReport } from "./unsampledreport";
/**
 * An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
**/
export declare class UnsampledReports extends SpeakeasyBase {
    items?: UnsampledReport[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
