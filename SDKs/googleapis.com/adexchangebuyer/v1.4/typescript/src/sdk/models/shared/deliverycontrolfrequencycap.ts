import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeliveryControlFrequencyCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxImpressions" })
  maxImpressions?: number;

  @SpeakeasyMetadata({ data: "json, name=numTimeUnits" })
  numTimeUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=timeUnitType" })
  timeUnitType?: string;
}
