import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class ListAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses: Address[];

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
