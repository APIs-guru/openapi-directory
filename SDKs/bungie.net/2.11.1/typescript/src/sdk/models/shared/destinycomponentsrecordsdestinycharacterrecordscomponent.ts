import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsRecordsDestinyRecordComponent } from "./destinycomponentsrecordsdestinyrecordcomponent";



export class DestinyComponentsRecordsDestinyCharacterRecordsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  featuredRecordHashes?: number[];

  @SpeakeasyMetadata()
  recordCategoriesRootNodeHash?: number;

  @SpeakeasyMetadata()
  recordSealsRootNodeHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyComponentsRecordsDestinyRecordComponent })
  records?: Map<string, DestinyComponentsRecordsDestinyRecordComponent>;
}
