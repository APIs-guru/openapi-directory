import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFlowTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
