import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DateRange } from "./googlecloudapigeev1daterange";
/**
 * Request body for [CreateExportRequest]
**/
export declare class GoogleCloudApigeeV1ExportRequest extends SpeakeasyBase {
    csvDelimiter?: string;
    datastoreName?: string;
    dateRange?: GoogleCloudApigeeV1DateRange;
    description?: string;
    name?: string;
    outputFormat?: string;
}
