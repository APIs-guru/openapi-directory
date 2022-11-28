import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestRenderEmailTemplateResponse
/** 
 * The following element is returned by the service.
**/
export class TestRenderEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RenderedTemplate" })
  renderedTemplate: string;
}
