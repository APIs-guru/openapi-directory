import { SpeakeasyBase } from "../../../internal/utils";
import { GrantListEntry } from "./grantlistentry";
export declare class ListGrantsResponse extends SpeakeasyBase {
    grants?: GrantListEntry[];
    nextMarker?: string;
    truncated?: boolean;
}
