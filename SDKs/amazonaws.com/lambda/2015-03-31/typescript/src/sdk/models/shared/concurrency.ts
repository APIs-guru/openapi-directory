import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Concurrency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReservedConcurrentExecutions" })
  reservedConcurrentExecutions?: number;
}
