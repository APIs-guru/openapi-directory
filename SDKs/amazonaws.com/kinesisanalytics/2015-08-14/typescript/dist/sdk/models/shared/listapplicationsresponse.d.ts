import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationSummary } from "./applicationsummary";
/**
 * <p/>
**/
export declare class ListApplicationsResponse extends SpeakeasyBase {
    applicationSummaries: ApplicationSummary[];
    hasMoreApplications: boolean;
}
