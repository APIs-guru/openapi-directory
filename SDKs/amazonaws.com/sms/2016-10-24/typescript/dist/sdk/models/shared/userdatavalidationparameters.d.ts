import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";
/**
 * Contains validation parameters.
**/
export declare class UserDataValidationParameters extends SpeakeasyBase {
    scriptType?: ScriptTypeEnum;
    source?: Source;
}
