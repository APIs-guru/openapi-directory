import { SpeakeasyBase } from "../../../internal/utils";
import { ModifierGroup } from "./modifiergroup";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetModifierGroupsResponse extends SpeakeasyBase {
    data: ModifierGroup[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
