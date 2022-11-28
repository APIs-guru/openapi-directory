import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_number" })
  blockNumber: string;

  @SpeakeasyMetadata({ data: "json, name=difficulty" })
  difficulty: string;

  @SpeakeasyMetadata({ data: "json, name=gas_limit" })
  gasLimit: string;

  @SpeakeasyMetadata({ data: "json, name=gas_used" })
  gasUsed: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash: string;

  @SpeakeasyMetadata({ data: "json, name=miner" })
  miner: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent_hash" })
  parentHash: string;

  @SpeakeasyMetadata({ data: "json, name=size_in_bytes" })
  sizeInBytes: string;

  @SpeakeasyMetadata({ data: "json, name=time_stamp" })
  timeStamp: string;

  @SpeakeasyMetadata({ data: "json, name=transactions_count" })
  transactionsCount: string;
}
