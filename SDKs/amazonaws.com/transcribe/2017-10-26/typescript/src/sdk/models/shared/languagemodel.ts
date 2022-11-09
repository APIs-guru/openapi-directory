import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";


// LanguageModel
/** 
 * The structure used to describe a custom language model.
**/
export class LanguageModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseModelName" })
  baseModelName?: BaseModelNameEnum;

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: ClmLanguageCodeEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelStatus" })
  modelStatus?: ModelStatusEnum;

  @Metadata({ data: "json, name=UpgradeAvailability" })
  upgradeAvailability?: boolean;
}
