import { SpeakeasyBase } from "../../../internal/utils";
import { ActionStatusEnum } from "./actionstatusenum";
export declare class UpdateActionRequest extends SpeakeasyBase {
    actionName: string;
    description?: string;
    properties?: Map<string, string>;
    propertiesToRemove?: string[];
    status?: ActionStatusEnum;
}
