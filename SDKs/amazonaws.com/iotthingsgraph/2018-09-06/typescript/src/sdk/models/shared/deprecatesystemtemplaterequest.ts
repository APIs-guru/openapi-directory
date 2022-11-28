import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeprecateSystemTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
