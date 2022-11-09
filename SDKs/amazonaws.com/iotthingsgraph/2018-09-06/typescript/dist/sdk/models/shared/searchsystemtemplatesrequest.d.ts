import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateFilter } from "./systemtemplatefilter";
export declare class SearchSystemTemplatesRequest extends SpeakeasyBase {
    filters?: SystemTemplateFilter[];
    maxResults?: number;
    nextToken?: string;
}
