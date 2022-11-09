import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowTemplateFilter } from "./flowtemplatefilter";
export declare class SearchFlowTemplatesRequest extends SpeakeasyBase {
    filters?: FlowTemplateFilter[];
    maxResults?: number;
    nextToken?: string;
}
