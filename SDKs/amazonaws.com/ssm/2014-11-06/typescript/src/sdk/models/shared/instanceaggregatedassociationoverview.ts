import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceAggregatedAssociationOverview
/** 
 * Status information about the aggregated associations.
**/
export class InstanceAggregatedAssociationOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceAssociationStatusAggregatedCount" })
  instanceAssociationStatusAggregatedCount?: Map<string, number>;
}
