import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplatesResponse } from "./templatesresponse";



export class ListTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplatesResponse" })
  templatesResponse: TemplatesResponse;
}
