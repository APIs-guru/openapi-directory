import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateVersionsResponse } from "./templateversionsresponse";


export class ListTemplateVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateVersionsResponse" })
  templateVersionsResponse: TemplateVersionsResponse;
}
