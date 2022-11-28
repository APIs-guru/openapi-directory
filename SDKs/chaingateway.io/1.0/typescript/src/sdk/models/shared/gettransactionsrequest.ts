import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid: string;
}
