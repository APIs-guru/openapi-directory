import { SpeakeasyBase } from "../../../internal/utils";
import { ModifierGroup } from "./modifiergroup";
export declare class GetModifierGroupResponse extends SpeakeasyBase {
    data: ModifierGroup;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
