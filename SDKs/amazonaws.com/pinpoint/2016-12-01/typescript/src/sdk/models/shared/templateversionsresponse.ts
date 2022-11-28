import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionResponse } from "./templateversionresponse";



// TemplateVersionsResponse
/** 
 * Provides information about all the versions of a specific message template.
**/
export class TemplateVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: TemplateVersionResponse })
  item: TemplateVersionResponse[];

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestID" })
  requestId?: string;
}
