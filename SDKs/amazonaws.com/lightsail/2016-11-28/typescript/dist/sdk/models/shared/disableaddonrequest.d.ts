import { SpeakeasyBase } from "../../../internal/utils";
import { AddOnTypeEnum } from "./addontypeenum";
export declare class DisableAddOnRequest extends SpeakeasyBase {
    addOnType: AddOnTypeEnum;
    resourceName: string;
}
