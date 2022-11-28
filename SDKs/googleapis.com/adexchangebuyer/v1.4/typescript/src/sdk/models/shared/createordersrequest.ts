import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";



export class CreateOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proposals", elemType: Proposal })
  proposals?: Proposal[];

  @SpeakeasyMetadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
