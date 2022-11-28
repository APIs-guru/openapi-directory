import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DateRange } from "./googlecloudapigeev1daterange";



// GoogleCloudApigeeV1ExportRequest
/** 
 * Request body for [CreateExportRequest]
**/
export class GoogleCloudApigeeV1ExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvDelimiter" })
  csvDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: GoogleCloudApigeeV1DateRange;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputFormat" })
  outputFormat?: string;
}
