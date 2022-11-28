import { SpeakeasyBase } from "../../../internal/utils";
import { AppSummary } from "./appsummary";
export declare class ListAppsResponse extends SpeakeasyBase {
    apps?: AppSummary[];
    nextToken?: string;
}
