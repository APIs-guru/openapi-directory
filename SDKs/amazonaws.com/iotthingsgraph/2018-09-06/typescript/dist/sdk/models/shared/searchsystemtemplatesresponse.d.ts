import { SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";
export declare class SearchSystemTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: SystemTemplateSummary[];
}
