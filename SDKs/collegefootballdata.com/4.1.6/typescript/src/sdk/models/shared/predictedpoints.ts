import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PredictedPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=predictedPoints" })
  predictedPoints?: number;

  @Metadata({ data: "json, name=yardLine" })
  yardLine?: number;
}
