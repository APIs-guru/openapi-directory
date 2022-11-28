import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Transactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cashier" })
  cashier?: string;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: number;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=txtype" })
  txtype?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
