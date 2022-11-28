import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";
export declare class ListApplicationsResponse extends SpeakeasyBase {
    applicationSummaries: ApplicationSummary[];
    nextToken?: string;
}
