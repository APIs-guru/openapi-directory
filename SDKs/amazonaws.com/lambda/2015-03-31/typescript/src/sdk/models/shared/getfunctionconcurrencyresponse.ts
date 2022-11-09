import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFunctionConcurrencyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReservedConcurrentExecutions" })
  reservedConcurrentExecutions?: number;
}
