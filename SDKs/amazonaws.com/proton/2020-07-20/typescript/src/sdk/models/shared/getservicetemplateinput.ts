import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
