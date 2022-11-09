import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationFilter } from "./associationfilter";


export class ListAssociationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationFilterList", elemType: shared.AssociationFilter })
  associationFilterList?: AssociationFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
