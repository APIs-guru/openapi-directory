import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeAssociationStatusToken" })
  nodeAssociationStatusToken?: string;
}
