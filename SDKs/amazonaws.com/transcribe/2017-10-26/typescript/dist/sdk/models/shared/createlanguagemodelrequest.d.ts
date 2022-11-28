import { SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { Tag } from "./tag";
export declare class CreateLanguageModelRequest extends SpeakeasyBase {
    baseModelName: BaseModelNameEnum;
    inputDataConfig: InputDataConfig;
    languageCode: ClmLanguageCodeEnum;
    modelName: string;
    tags?: Tag[];
}
