import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbClusterCapacityInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentCapacity?: number;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  pendingCapacity?: number;

  @SpeakeasyMetadata()
  secondsBeforeTimeout?: number;

  @SpeakeasyMetadata()
  timeoutAction?: string;
}
