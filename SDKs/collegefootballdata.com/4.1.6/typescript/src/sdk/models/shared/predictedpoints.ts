import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PredictedPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=predictedPoints" })
  predictedPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=yardLine" })
  yardLine?: number;
}
