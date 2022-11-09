import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { Tag } from "./tag";


export class CreateLanguageModelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseModelName" })
  baseModelName: BaseModelNameEnum;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: ClmLanguageCodeEnum;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
