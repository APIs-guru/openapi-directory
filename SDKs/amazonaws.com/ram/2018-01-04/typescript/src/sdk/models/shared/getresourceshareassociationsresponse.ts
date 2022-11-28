import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";



export class GetResourceShareAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareAssociations", elemType: ResourceShareAssociation })
  resourceShareAssociations?: ResourceShareAssociation[];
}
