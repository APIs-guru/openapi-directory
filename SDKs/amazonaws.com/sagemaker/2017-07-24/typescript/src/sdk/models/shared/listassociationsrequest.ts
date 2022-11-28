import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { SortAssociationsByEnum } from "./sortassociationsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationType" })
  associationType?: AssociationEdgeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationType" })
  destinationType?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortAssociationsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
