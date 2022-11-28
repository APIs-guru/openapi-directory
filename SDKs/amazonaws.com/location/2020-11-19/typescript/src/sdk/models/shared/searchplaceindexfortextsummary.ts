import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchPlaceIndexForTextSummary
/** 
 * A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
**/
export class SearchPlaceIndexForTextSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BiasPosition" })
  biasPosition?: number[];

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=FilterBBox" })
  filterBBox?: number[];

  @SpeakeasyMetadata({ data: "json, name=FilterCountries" })
  filterCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=ResultBBox" })
  resultBBox?: number[];

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
