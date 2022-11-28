import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DataCollector } from "./googlecloudapigeev1datacollector";



// GoogleCloudApigeeV1ListDataCollectorsResponse
/** 
 * Response for ListDataCollectors.
**/
export class GoogleCloudApigeeV1ListDataCollectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCollectors", elemType: GoogleCloudApigeeV1DataCollector })
  dataCollectors?: GoogleCloudApigeeV1DataCollector[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
