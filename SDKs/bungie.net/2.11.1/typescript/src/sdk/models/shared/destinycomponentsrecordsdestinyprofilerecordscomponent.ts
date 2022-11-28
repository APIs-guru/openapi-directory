import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsRecordsDestinyRecordComponent } from "./destinycomponentsrecordsdestinyrecordcomponent";



export class DestinyComponentsRecordsDestinyProfileRecordsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeScore?: number;

  @SpeakeasyMetadata()
  legacyScore?: number;

  @SpeakeasyMetadata()
  lifetimeScore?: number;

  @SpeakeasyMetadata()
  recordCategoriesRootNodeHash?: number;

  @SpeakeasyMetadata()
  recordSealsRootNodeHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyComponentsRecordsDestinyRecordComponent })
  records?: Map<string, DestinyComponentsRecordsDestinyRecordComponent>;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  trackedRecordHash?: number;
}
