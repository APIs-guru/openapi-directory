import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModelDict extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName: string;
}
