import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelName" })
  modelName: string;
}
