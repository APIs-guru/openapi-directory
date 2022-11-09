import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigQueryModelTraining extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentIteration" })
  currentIteration?: number;

  @Metadata({ data: "json, name=expectedTotalIterations" })
  expectedTotalIterations?: string;
}
