import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationSummary } from "./associationsummary";


export class ListAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationSummaries", elemType: shared.AssociationSummary })
  associationSummaries?: AssociationSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
