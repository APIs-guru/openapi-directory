import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeliveryControlFrequencyCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxImpressions" })
  maxImpressions?: number;

  @Metadata({ data: "json, name=numTimeUnits" })
  numTimeUnits?: number;

  @Metadata({ data: "json, name=timeUnitType" })
  timeUnitType?: string;
}
