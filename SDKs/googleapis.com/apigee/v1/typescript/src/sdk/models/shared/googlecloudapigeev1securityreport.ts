import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1SecurityReportMetadata } from "./googlecloudapigeev1securityreportmetadata";
import { GoogleCloudApigeeV1SecurityReportResultMetadata } from "./googlecloudapigeev1securityreportresultmetadata";


// GoogleCloudApigeeV1SecurityReport
/** 
 * SecurityReport saves all the information about the created security report.
**/
export class GoogleCloudApigeeV1SecurityReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=executionTime" })
  executionTime?: string;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudApigeeV1SecurityReportMetadata;

  @Metadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @Metadata({ data: "json, name=result" })
  result?: GoogleCloudApigeeV1SecurityReportResultMetadata;

  @Metadata({ data: "json, name=resultFileSize" })
  resultFileSize?: string;

  @Metadata({ data: "json, name=resultRows" })
  resultRows?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}
