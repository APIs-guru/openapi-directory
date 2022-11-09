import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IterationResult } from "./iterationresult";


export class MlStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=iterationResults", elemType: shared.IterationResult })
  iterationResults?: IterationResult[];

  @Metadata({ data: "json, name=maxIterations" })
  maxIterations?: string;
}
