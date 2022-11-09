import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1QueryMetadata } from "./googlecloudapigeev1querymetadata";
import { GoogleCloudApigeeV1AsyncQueryResult } from "./googlecloudapigeev1asyncqueryresult";


export class GoogleCloudApigeeV1AsyncQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=executionTime" })
  executionTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudApigeeV1QueryMetadata;

  @Metadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @Metadata({ data: "json, name=result" })
  result?: GoogleCloudApigeeV1AsyncQueryResult;

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
