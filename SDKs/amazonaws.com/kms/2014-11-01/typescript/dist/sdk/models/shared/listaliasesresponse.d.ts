import { SpeakeasyBase } from "../../../internal/utils";
import { AliasListEntry } from "./aliaslistentry";
export declare class ListAliasesResponse extends SpeakeasyBase {
    aliases?: AliasListEntry[];
    nextMarker?: string;
    truncated?: boolean;
}
