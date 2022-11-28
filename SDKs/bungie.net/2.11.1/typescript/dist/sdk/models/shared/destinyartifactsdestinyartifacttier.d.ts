import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyArtifactsDestinyArtifactTierItem } from "./destinyartifactsdestinyartifacttieritem";
export declare class DestinyArtifactsDestinyArtifactTier extends SpeakeasyBase {
    isUnlocked?: boolean;
    items?: DestinyArtifactsDestinyArtifactTierItem[];
    pointsToUnlock?: number;
    tierHash?: number;
}
