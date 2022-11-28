import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Printer } from "./printer";



// ListPrintersResponse
/** 
 * Response for listing printers.
**/
export class ListPrintersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=printers", elemType: Printer })
  printers?: Printer[];
}
