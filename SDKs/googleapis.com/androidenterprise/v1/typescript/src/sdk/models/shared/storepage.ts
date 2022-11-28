import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";



// StorePage
/** 
 * Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
**/
export class StorePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string[];

  @SpeakeasyMetadata({ data: "json, name=name", elemType: LocalizedText })
  name?: LocalizedText[];
}
