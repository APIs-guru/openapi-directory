import { SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateSummary } from "./flowtemplatesummary";
export declare class SearchFlowTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: FlowTemplateSummary[];
}
