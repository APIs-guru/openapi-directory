import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelName" })
  modelName: string;
}
