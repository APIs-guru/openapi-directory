import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplatesResponse } from "./templatesresponse";


export class ListTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplatesResponse" })
  templatesResponse: TemplatesResponse;
}
