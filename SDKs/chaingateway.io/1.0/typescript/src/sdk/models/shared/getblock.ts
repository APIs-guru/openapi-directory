import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=block_number" })
  blockNumber: string;

  @Metadata({ data: "json, name=difficulty" })
  difficulty: string;

  @Metadata({ data: "json, name=gas_limit" })
  gasLimit: string;

  @Metadata({ data: "json, name=gas_used" })
  gasUsed: string;

  @Metadata({ data: "json, name=hash" })
  hash: string;

  @Metadata({ data: "json, name=miner" })
  miner: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=parent_hash" })
  parentHash: string;

  @Metadata({ data: "json, name=size_in_bytes" })
  sizeInBytes: string;

  @Metadata({ data: "json, name=time_stamp" })
  timeStamp: string;

  @Metadata({ data: "json, name=transactions_count" })
  transactionsCount: string;
}
