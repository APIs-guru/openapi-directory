import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AliasListEntry } from "./aliaslistentry";



export class ListAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases", elemType: AliasListEntry })
  aliases?: AliasListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
