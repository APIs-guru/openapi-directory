import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorldTemplateBodyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;
}
