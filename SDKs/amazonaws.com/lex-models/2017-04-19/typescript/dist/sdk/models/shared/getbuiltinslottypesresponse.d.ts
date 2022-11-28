import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltinSlotTypeMetadata } from "./builtinslottypemetadata";
export declare class GetBuiltinSlotTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    slotTypes?: BuiltinSlotTypeMetadata[];
}
