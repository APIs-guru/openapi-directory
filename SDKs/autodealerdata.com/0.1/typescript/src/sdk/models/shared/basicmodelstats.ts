import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BasicModelStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average: number;

  @SpeakeasyMetadata({ data: "json, name=median" })
  median: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pVariance" })
  pVariance: number;

  @SpeakeasyMetadata({ data: "json, name=stdDev" })
  stdDev: number;
}
