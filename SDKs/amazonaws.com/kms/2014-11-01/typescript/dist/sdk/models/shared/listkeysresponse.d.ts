import { SpeakeasyBase } from "../../../internal/utils";
import { KeyListEntry } from "./keylistentry";
export declare class ListKeysResponse extends SpeakeasyBase {
    keys?: KeyListEntry[];
    nextMarker?: string;
    truncated?: boolean;
}
