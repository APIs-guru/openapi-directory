import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AliasConfiguration } from "./aliasconfiguration";



export class ListAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases", elemType: AliasConfiguration })
  aliases?: AliasConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
