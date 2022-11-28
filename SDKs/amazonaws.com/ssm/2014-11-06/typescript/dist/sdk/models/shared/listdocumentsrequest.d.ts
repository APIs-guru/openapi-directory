import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentFilter } from "./documentfilter";
import { DocumentKeyValuesFilter } from "./documentkeyvaluesfilter";
export declare class ListDocumentsRequest extends SpeakeasyBase {
    documentFilterList?: DocumentFilter[];
    filters?: DocumentKeyValuesFilter[];
    maxResults?: number;
    nextToken?: string;
}
