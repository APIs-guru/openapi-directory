import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AliasConfiguration } from "./aliasconfiguration";
export declare class ListAliasesResponse extends SpeakeasyBase {
    aliases?: AliasConfiguration[];
    nextMarker?: string;
}
