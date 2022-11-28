import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSystemTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
