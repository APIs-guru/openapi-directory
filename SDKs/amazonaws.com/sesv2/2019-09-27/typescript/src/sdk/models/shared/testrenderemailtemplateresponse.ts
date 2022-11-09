import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestRenderEmailTemplateResponse
/** 
 * The following element is returned by the service.
**/
export class TestRenderEmailTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RenderedTemplate" })
  renderedTemplate: string;
}
