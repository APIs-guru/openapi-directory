import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1DateRange } from "./googlecloudapigeev1daterange";


// GoogleCloudApigeeV1ExportRequest
/** 
 * Request body for [CreateExportRequest]
**/
export class GoogleCloudApigeeV1ExportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvDelimiter" })
  csvDelimiter?: string;

  @Metadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: GoogleCloudApigeeV1DateRange;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputFormat" })
  outputFormat?: string;
}
