import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLanguageModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;
}
