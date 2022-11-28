import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the status of an "Unlock Flag" on a Character or Profile.
 * These are individual bits of state that can be either set or not set, and sometimes provide interesting human-readable information in their related DestinyUnlockDefinition.
**/
export declare class DestinyDestinyUnlockStatus extends SpeakeasyBase {
    isSet?: boolean;
    unlockHash?: number;
}
