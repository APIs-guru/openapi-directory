import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceTemplateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
