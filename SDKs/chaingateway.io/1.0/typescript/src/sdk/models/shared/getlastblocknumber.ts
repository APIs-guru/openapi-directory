import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLastBlockNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocknumber" })
  blocknumber: number;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
