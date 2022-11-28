import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardUnitEnum } from "./standardunitenum";



// Datapoint
/** 
 * Encapsulates the statistical data that CloudWatch computes from metric data.
**/
export class Datapoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  average?: number;

  @SpeakeasyMetadata()
  extendedStatistics?: Map<string, number>;

  @SpeakeasyMetadata()
  maximum?: number;

  @SpeakeasyMetadata()
  minimum?: number;

  @SpeakeasyMetadata()
  sampleCount?: number;

  @SpeakeasyMetadata()
  sum?: number;

  @SpeakeasyMetadata()
  timestamp?: Date;

  @SpeakeasyMetadata()
  unit?: StandardUnitEnum;
}
