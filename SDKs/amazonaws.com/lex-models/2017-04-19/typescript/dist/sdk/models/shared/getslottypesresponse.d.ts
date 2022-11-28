import { SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeMetadata } from "./slottypemetadata";
export declare class GetSlotTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    slotTypes?: SlotTypeMetadata[];
}
