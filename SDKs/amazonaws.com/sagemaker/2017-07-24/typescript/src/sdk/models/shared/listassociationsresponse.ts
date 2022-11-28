import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationSummary } from "./associationsummary";



export class ListAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationSummaries", elemType: AssociationSummary })
  associationSummaries?: AssociationSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
