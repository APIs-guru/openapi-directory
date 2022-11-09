import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AliasConfiguration } from "./aliasconfiguration";


export class ListAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases", elemType: shared.AliasConfiguration })
  aliases?: AliasConfiguration[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
