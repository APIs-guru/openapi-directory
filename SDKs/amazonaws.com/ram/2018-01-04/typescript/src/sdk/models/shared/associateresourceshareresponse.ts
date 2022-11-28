import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";



export class AssociateResourceShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareAssociations", elemType: ResourceShareAssociation })
  resourceShareAssociations?: ResourceShareAssociation[];
}
