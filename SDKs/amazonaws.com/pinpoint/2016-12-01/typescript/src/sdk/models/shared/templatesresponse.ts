import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TemplateResponse } from "./templateresponse";


// TemplatesResponse
/** 
 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
**/
export class TemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.TemplateResponse })
  item: TemplateResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
