import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchPlaceIndexForPositionSummary
/** 
 * A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
**/
export class SearchPlaceIndexForPositionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position: number[];
}
