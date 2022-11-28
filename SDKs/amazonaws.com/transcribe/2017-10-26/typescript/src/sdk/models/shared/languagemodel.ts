import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";



// LanguageModel
/** 
 * The structure used to describe a custom language model.
**/
export class LanguageModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseModelName" })
  baseModelName?: BaseModelNameEnum;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: ClmLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelStatus" })
  modelStatus?: ModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpgradeAvailability" })
  upgradeAvailability?: boolean;
}
