import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MlModelTypeEnum } from "./mlmodeltypeenum";



export class CreateMlModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelName" })
  mlModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelType" })
  mlModelType: MlModelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Recipe" })
  recipe?: string;

  @SpeakeasyMetadata({ data: "json, name=RecipeUri" })
  recipeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingDataSourceId" })
  trainingDataSourceId: string;
}
