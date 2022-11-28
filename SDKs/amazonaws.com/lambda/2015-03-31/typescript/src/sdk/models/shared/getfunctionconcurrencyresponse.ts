import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFunctionConcurrencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReservedConcurrentExecutions" })
  reservedConcurrentExecutions?: number;
}
