import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TemplateVersionResponse } from "./templateversionresponse";


// TemplateVersionsResponse
/** 
 * Provides information about all the versions of a specific message template.
**/
export class TemplateVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.TemplateVersionResponse })
  item: TemplateVersionResponse[];

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RequestID" })
  requestId?: string;
}
