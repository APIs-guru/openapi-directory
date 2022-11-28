import { SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskUiSummary } from "./humantaskuisummary";
export declare class ListHumanTaskUisResponse extends SpeakeasyBase {
    humanTaskUiSummaries: HumanTaskUiSummary[];
    nextToken?: string;
}
