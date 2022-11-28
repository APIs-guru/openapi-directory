import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteServiceTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
