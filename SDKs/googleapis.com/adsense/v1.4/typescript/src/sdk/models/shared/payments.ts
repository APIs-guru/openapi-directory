import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";



export class Payments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Payment })
  items?: Payment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
