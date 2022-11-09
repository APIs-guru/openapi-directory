import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLastBlockNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocknumber" })
  blocknumber: number;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
