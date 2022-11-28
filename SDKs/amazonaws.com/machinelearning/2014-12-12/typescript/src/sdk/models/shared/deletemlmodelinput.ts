import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMlModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
