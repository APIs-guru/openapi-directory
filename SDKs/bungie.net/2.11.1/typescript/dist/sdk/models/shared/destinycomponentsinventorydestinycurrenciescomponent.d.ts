import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This component provides a quick lookup of every item the requested character has and how much of that item they have.
 * Requesting this component will allow you to circumvent manually putting together the list of which currencies you have for the purpose of testing currency requirements on an item being purchased, or operations that have costs.
 * You *could* figure this out yourself by doing a GetCharacter or GetProfile request and forming your own lookup table, but that is inconvenient enough that this feels like a worthwhile (and optional) redundency. Don't bother requesting it if you have already created your own lookup from prior GetCharacter/GetProfile calls.
**/
export declare class DestinyComponentsInventoryDestinyCurrenciesComponent extends SpeakeasyBase {
    itemQuantities?: Map<string, number>;
}
