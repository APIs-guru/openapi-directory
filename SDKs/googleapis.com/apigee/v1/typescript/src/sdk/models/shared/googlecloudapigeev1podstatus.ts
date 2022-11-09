import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudApigeeV1PodStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=appVersion" })
  appVersion?: string;

  @Metadata({ data: "json, name=deploymentStatus" })
  deploymentStatus?: string;

  @Metadata({ data: "json, name=deploymentStatusTime" })
  deploymentStatusTime?: string;

  @Metadata({ data: "json, name=deploymentTime" })
  deploymentTime?: string;

  @Metadata({ data: "json, name=podName" })
  podName?: string;

  @Metadata({ data: "json, name=podStatus" })
  podStatus?: string;

  @Metadata({ data: "json, name=podStatusTime" })
  podStatusTime?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @Metadata({ data: "json, name=statusCodeDetails" })
  statusCodeDetails?: string;
}
