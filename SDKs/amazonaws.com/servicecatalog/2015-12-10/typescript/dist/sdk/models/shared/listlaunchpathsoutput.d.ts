import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchPathSummary } from "./launchpathsummary";
export declare class ListLaunchPathsOutput extends SpeakeasyBase {
    launchPathSummaries?: LaunchPathSummary[];
    nextPageToken?: string;
}
