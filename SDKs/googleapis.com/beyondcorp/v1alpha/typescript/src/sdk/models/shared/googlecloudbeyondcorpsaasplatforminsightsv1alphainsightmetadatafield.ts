import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField
/** 
 * Field metadata. Commonly understandable name and description for the field. Multiple such fields constitute the Insight.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filterAlias" })
  filterAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=groupable" })
  groupable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
