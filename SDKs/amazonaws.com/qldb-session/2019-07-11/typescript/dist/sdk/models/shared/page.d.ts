import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ValueHolder } from "./valueholder";
/**
 * Contains details of the fetched page.
**/
export declare class Page extends SpeakeasyBase {
    nextPageToken?: string;
    values?: ValueHolder[];
}
