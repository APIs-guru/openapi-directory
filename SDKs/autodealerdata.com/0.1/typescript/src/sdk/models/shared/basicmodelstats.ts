import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BasicModelStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average: number;

  @Metadata({ data: "json, name=median" })
  median: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pVariance" })
  pVariance: number;

  @Metadata({ data: "json, name=stdDev" })
  stdDev: number;
}
