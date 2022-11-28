import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IterationResult } from "./iterationresult";



export class MlStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iterationResults", elemType: IterationResult })
  iterationResults?: IterationResult[];

  @SpeakeasyMetadata({ data: "json, name=maxIterations" })
  maxIterations?: string;
}
