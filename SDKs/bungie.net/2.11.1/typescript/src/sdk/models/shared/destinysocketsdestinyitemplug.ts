import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



export class DestinySocketsDestinyItemPlug extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canInsert?: boolean;

  @SpeakeasyMetadata()
  enableFailIndexes?: number[];

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  insertFailIndexes?: number[];

  @SpeakeasyMetadata()
  plugItemHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  plugObjectives?: DestinyQuestsDestinyObjectiveProgress[];
}
