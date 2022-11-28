import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionSummary } from "./applicationversionsummary";
export declare class ListApplicationVersionsResponse extends SpeakeasyBase {
    applicationVersionSummaries?: ApplicationVersionSummary[];
    nextToken?: string;
}
