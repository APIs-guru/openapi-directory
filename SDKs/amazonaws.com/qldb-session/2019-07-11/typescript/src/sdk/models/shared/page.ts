import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueHolder } from "./valueholder";


// Page
/** 
 * Contains details of the fetched page.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=Values", elemType: shared.ValueHolder })
  values?: ValueHolder[];
}
