import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { SortAssociationsByEnum } from "./sortassociationsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListAssociationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationType" })
  associationType?: AssociationEdgeTypeEnum;

  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=DestinationType" })
  destinationType?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortAssociationsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
