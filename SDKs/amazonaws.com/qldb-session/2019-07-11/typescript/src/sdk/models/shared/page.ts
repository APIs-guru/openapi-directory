import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueHolder } from "./valueholder";



// Page
/** 
 * Contains details of the fetched page.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Values", elemType: ValueHolder })
  values?: ValueHolder[];
}
