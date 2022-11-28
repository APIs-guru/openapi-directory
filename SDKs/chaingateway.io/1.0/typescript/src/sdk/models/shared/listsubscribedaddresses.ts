import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipn } from "./ipn";



export class ListSubscribedAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipns", elemType: Ipn })
  ipns: Ipn[];

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
