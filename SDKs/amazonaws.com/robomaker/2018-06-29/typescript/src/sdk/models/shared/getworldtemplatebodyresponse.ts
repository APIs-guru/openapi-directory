import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorldTemplateBodyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;
}
