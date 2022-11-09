import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ipn } from "./ipn";


export class ListSubscribedAddresses extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipns", elemType: shared.Ipn })
  ipns: Ipn[];

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
