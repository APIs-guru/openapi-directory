import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGasPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=gasprice" })
  gasprice: number;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
