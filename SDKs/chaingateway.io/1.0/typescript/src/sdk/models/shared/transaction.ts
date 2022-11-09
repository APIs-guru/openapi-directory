import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Transaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=block_number" })
  blockNumber: string;

  @Metadata({ data: "json, name=contract_address" })
  contractAddress: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=gas" })
  gas: string;

  @Metadata({ data: "json, name=gas_price" })
  gasPrice: string;

  @Metadata({ data: "json, name=to" })
  to: string;

  @Metadata({ data: "json, name=token_decimals" })
  tokenDecimals: string;

  @Metadata({ data: "json, name=token_name" })
  tokenName: string;

  @Metadata({ data: "json, name=token_supply" })
  tokenSupply: string;

  @Metadata({ data: "json, name=token_symbol" })
  tokenSymbol: string;

  @Metadata({ data: "json, name=txid" })
  txid: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
