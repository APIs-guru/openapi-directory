import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=TemplateData" })
  templateData?: string;
}
