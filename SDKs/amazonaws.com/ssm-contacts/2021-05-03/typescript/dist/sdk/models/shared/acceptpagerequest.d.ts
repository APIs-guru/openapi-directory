import { SpeakeasyBase } from "../../../internal/utils";
import { AcceptCodeValidationEnum } from "./acceptcodevalidationenum";
import { AcceptTypeEnum } from "./accepttypeenum";
export declare class AcceptPageRequest extends SpeakeasyBase {
    acceptCode: string;
    acceptCodeValidation?: AcceptCodeValidationEnum;
    acceptType: AcceptTypeEnum;
    contactChannelId?: string;
    note?: string;
    pageId: string;
}
