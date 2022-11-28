import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { Tag } from "./tag";



export class CreateLanguageModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseModelName" })
  baseModelName: BaseModelNameEnum;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: ClmLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
