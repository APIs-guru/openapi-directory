import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Template extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateArn" })
  templateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateData" })
  templateData?: string;
}
