import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModelDict extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelName" })
  modelName: string;
}
