import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



// DestinyQuestsDestinyQuestStatus
/** 
 * Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
**/
export class DestinyQuestsDestinyQuestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completed?: boolean;

  @SpeakeasyMetadata()
  itemInstanceId?: number;

  @SpeakeasyMetadata()
  questHash?: number;

  @SpeakeasyMetadata()
  redeemed?: boolean;

  @SpeakeasyMetadata()
  started?: boolean;

  @SpeakeasyMetadata()
  stepHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  stepObjectives?: DestinyQuestsDestinyObjectiveProgress[];

  @SpeakeasyMetadata()
  tracked?: boolean;

  @SpeakeasyMetadata()
  vendorHash?: number;
}
