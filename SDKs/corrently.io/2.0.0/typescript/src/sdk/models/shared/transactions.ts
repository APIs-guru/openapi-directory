import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Transactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cashier" })
  cashier?: string;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: number;

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=txtype" })
  txtype?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
