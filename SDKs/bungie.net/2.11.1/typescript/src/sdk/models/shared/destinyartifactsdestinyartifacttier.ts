import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyArtifactsDestinyArtifactTierItem } from "./destinyartifactsdestinyartifacttieritem";



export class DestinyArtifactsDestinyArtifactTier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isUnlocked?: boolean;

  @SpeakeasyMetadata({ elemType: DestinyArtifactsDestinyArtifactTierItem })
  items?: DestinyArtifactsDestinyArtifactTierItem[];

  @SpeakeasyMetadata()
  pointsToUnlock?: number;

  @SpeakeasyMetadata()
  tierHash?: number;
}
