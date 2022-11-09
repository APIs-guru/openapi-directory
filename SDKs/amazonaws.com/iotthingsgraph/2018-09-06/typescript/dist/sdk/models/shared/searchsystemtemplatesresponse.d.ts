import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";
export declare class SearchSystemTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: SystemTemplateSummary[];
}
