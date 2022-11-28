import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";
/**
 * Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
**/
export declare class StorePage extends SpeakeasyBase {
    id?: string;
    link?: string[];
    name?: LocalizedText[];
}
