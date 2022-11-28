import { SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * The structure used to describe a custom language model.
**/
export declare class LanguageModel extends SpeakeasyBase {
    baseModelName?: BaseModelNameEnum;
    createTime?: Date;
    failureReason?: string;
    inputDataConfig?: InputDataConfig;
    languageCode?: ClmLanguageCodeEnum;
    lastModifiedTime?: Date;
    modelName?: string;
    modelStatus?: ModelStatusEnum;
    upgradeAvailability?: boolean;
}
