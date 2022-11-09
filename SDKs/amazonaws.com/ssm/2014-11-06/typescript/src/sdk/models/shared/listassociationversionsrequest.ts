import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociationVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
