import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1QueryMetadata } from "./googlecloudapigeev1querymetadata";
import { GoogleCloudApigeeV1AsyncQueryResult } from "./googlecloudapigeev1asyncqueryresult";



export class GoogleCloudApigeeV1AsyncQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTime" })
  executionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudApigeeV1QueryMetadata;

  @SpeakeasyMetadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GoogleCloudApigeeV1AsyncQueryResult;

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
