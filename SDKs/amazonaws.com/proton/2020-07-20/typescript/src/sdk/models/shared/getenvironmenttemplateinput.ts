import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEnvironmentTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
