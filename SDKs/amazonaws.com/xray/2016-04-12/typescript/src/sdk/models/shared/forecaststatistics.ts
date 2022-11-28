import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ForecastStatistics
/** 
 * The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
**/
export class ForecastStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaultCountHigh" })
  faultCountHigh?: number;

  @SpeakeasyMetadata({ data: "json, name=FaultCountLow" })
  faultCountLow?: number;
}
