import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



export class DestinyComponentsRecordsDestinyRecordComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  intervalObjectives?: DestinyQuestsDestinyObjectiveProgress[];

  @SpeakeasyMetadata()
  intervalsRedeemedCount?: number;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  objectives?: DestinyQuestsDestinyObjectiveProgress[];

  @SpeakeasyMetadata()
  rewardVisibilty?: boolean[];

  @SpeakeasyMetadata()
  state?: number;
}
