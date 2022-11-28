import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list of perks to display in an item tooltip - and whether or not they have been activated.
 * Perks apply a variety of effects to a character, and are generally either intrinsic to the item or provided in activated talent nodes or sockets.
**/
export declare class DestinyPerksDestinyPerkReference extends SpeakeasyBase {
    iconPath?: string;
    isActive?: boolean;
    perkHash?: number;
    visible?: boolean;
}
