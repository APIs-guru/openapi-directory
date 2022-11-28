import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";



export class CreateLanguageModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseModelName" })
  baseModelName?: BaseModelNameEnum;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: ClmLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelStatus" })
  modelStatus?: ModelStatusEnum;
}
