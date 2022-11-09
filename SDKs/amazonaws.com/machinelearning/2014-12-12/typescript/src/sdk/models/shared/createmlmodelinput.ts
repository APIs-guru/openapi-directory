import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MlModelTypeEnum } from "./mlmodeltypeenum";


export class CreateMlModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @Metadata({ data: "json, name=MLModelName" })
  mlModelName?: string;

  @Metadata({ data: "json, name=MLModelType" })
  mlModelType: MlModelTypeEnum;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=Recipe" })
  recipe?: string;

  @Metadata({ data: "json, name=RecipeUri" })
  recipeUri?: string;

  @Metadata({ data: "json, name=TrainingDataSourceId" })
  trainingDataSourceId: string;
}
