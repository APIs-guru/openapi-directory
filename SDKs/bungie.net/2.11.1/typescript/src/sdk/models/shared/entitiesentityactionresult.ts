import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntitiesEntityActionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  entityId?: number;

  @SpeakeasyMetadata()
  result?: number;
}
