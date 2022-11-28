import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityReportMetadata } from "./googlecloudapigeev1securityreportmetadata";
import { GoogleCloudApigeeV1SecurityReportResultMetadata } from "./googlecloudapigeev1securityreportresultmetadata";



// GoogleCloudApigeeV1SecurityReport
/** 
 * SecurityReport saves all the information about the created security report.
**/
export class GoogleCloudApigeeV1SecurityReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTime" })
  executionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudApigeeV1SecurityReportMetadata;

  @SpeakeasyMetadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GoogleCloudApigeeV1SecurityReportResultMetadata;

  @SpeakeasyMetadata({ data: "json, name=resultFileSize" })
  resultFileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=resultRows" })
  resultRows?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}
