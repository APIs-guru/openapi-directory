import { SpeakeasyBase } from "../../../internal/utils";
import { TextTranslationJobFilter } from "./texttranslationjobfilter";
export declare class ListTextTranslationJobsRequest extends SpeakeasyBase {
    filter?: TextTranslationJobFilter;
    maxResults?: number;
    nextToken?: string;
}
