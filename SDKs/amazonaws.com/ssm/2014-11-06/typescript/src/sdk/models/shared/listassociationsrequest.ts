import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationFilter } from "./associationfilter";



export class ListAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationFilterList", elemType: AssociationFilter })
  associationFilterList?: AssociationFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
