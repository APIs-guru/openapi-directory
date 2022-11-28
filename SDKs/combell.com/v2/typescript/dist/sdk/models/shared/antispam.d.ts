import { SpeakeasyBase } from "../../../internal/utils";
import { AntiSpamTypesEnum } from "./antispamtypesenum";
export declare class AntiSpam extends SpeakeasyBase {
    allowedTypes?: AntiSpamTypesEnum[];
    type?: AntiSpamTypesEnum;
}
