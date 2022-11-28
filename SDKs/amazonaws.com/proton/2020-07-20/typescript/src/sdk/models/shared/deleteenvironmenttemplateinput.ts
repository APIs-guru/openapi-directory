import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvironmentTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
