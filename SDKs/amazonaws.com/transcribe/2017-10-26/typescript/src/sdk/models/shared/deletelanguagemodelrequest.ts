import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLanguageModelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelName" })
  modelName: string;
}
