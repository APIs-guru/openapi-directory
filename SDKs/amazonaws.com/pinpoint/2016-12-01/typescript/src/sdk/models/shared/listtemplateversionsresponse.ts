import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionsResponse } from "./templateversionsresponse";



export class ListTemplateVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateVersionsResponse" })
  templateVersionsResponse: TemplateVersionsResponse;
}
