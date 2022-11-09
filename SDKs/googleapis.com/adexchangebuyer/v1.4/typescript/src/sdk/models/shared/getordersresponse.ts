import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Proposal } from "./proposal";


export class GetOrdersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=proposals", elemType: shared.Proposal })
  proposals?: Proposal[];
}
