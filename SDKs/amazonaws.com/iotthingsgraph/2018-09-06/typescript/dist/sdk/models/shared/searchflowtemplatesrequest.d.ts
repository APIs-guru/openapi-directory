import { SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateFilter } from "./flowtemplatefilter";
export declare class SearchFlowTemplatesRequest extends SpeakeasyBase {
    filters?: FlowTemplateFilter[];
    maxResults?: number;
    nextToken?: string;
}
