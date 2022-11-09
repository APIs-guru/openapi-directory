import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Concurrency extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReservedConcurrentExecutions" })
  reservedConcurrentExecutions?: number;
}
