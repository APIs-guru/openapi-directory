import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";



export class GetOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proposals", elemType: Proposal })
  proposals?: Proposal[];
}
