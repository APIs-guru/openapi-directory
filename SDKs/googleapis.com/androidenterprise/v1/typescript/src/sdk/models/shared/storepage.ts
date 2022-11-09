import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalizedText } from "./localizedtext";


// StorePage
/** 
 * Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
**/
export class StorePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=link" })
  link?: string[];

  @Metadata({ data: "json, name=name", elemType: shared.LocalizedText })
  name?: LocalizedText[];
}
