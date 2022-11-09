import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteServiceTemplateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
