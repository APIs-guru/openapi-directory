import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigQueryModelTraining extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentIteration" })
  currentIteration?: number;

  @SpeakeasyMetadata({ data: "json, name=expectedTotalIterations" })
  expectedTotalIterations?: string;
}
