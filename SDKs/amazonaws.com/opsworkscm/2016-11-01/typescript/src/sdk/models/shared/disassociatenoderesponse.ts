import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeAssociationStatusToken" })
  nodeAssociationStatusToken?: string;
}
