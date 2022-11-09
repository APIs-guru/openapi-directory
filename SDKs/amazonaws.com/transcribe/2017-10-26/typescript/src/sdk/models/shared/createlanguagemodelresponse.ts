import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";


export class CreateLanguageModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseModelName" })
  baseModelName?: BaseModelNameEnum;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: ClmLanguageCodeEnum;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelStatus" })
  modelStatus?: ModelStatusEnum;
}
