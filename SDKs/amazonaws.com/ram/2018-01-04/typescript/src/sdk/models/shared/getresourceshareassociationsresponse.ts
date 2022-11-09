import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceShareAssociation } from "./resourceshareassociation";


export class GetResourceShareAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceShareAssociations", elemType: shared.ResourceShareAssociation })
  resourceShareAssociations?: ResourceShareAssociation[];
}
