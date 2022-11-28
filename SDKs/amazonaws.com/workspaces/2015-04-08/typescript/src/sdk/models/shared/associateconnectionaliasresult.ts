import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateConnectionAliasResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionIdentifier" })
  connectionIdentifier?: string;
}
