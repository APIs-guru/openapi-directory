import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Payment } from "./payment";


export class Payments extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Payment })
  items?: Payment[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
