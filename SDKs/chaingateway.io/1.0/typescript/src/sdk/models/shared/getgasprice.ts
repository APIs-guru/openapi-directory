import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGasPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gasprice" })
  gasprice: number;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
