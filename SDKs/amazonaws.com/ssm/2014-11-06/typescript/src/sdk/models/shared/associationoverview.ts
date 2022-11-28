import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociationOverview
/** 
 * Information about the association.
**/
export class AssociationOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationStatusAggregatedCount" })
  associationStatusAggregatedCount?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
