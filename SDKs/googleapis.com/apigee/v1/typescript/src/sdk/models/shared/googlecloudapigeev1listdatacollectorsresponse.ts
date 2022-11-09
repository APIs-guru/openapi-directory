import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1DataCollector } from "./googlecloudapigeev1datacollector";


// GoogleCloudApigeeV1ListDataCollectorsResponse
/** 
 * Response for ListDataCollectors.
**/
export class GoogleCloudApigeeV1ListDataCollectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataCollectors", elemType: shared.GoogleCloudApigeeV1DataCollector })
  dataCollectors?: GoogleCloudApigeeV1DataCollector[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
