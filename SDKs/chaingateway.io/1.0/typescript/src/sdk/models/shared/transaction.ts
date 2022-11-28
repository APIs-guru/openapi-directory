import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Transaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=block_number" })
  blockNumber: string;

  @SpeakeasyMetadata({ data: "json, name=contract_address" })
  contractAddress: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=gas" })
  gas: string;

  @SpeakeasyMetadata({ data: "json, name=gas_price" })
  gasPrice: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=token_decimals" })
  tokenDecimals: string;

  @SpeakeasyMetadata({ data: "json, name=token_name" })
  tokenName: string;

  @SpeakeasyMetadata({ data: "json, name=token_supply" })
  tokenSupply: string;

  @SpeakeasyMetadata({ data: "json, name=token_symbol" })
  tokenSymbol: string;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
