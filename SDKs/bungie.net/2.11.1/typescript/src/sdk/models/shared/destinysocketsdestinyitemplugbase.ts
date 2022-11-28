import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinySocketsDestinyItemPlugBase extends SpeakeasyBase {
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
}
