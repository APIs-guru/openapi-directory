import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTransactionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=txid" })
  txid: string;
}
