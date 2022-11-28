import { SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";
export declare class CreateOrdersRequest extends SpeakeasyBase {
    proposals?: Proposal[];
    webPropertyCode?: string;
}
