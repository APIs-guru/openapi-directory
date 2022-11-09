import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AliasListEntry } from "./aliaslistentry";


export class ListAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases", elemType: shared.AliasListEntry })
  aliases?: AliasListEntry[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
