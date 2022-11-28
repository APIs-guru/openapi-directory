import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateFirewallDomainListRequest extends SpeakeasyBase {
    creatorRequestId: string;
    name: string;
    tags?: Tag[];
}
