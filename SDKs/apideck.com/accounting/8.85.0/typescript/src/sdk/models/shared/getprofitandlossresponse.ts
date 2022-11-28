import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfitAndLoss } from "./profitandloss";



export class GetProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ProfitAndLoss;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
