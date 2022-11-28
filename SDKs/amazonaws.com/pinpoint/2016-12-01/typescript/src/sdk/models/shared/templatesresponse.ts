import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateResponse } from "./templateresponse";



// TemplatesResponse
/** 
 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
**/
export class TemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: TemplateResponse })
  item: TemplateResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
