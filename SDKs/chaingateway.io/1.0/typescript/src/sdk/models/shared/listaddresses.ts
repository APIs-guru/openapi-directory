import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";


export class ListAddresses extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses: Address[];

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
