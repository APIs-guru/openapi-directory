import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudApigeeV1PodStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appVersion" })
  appVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatus" })
  deploymentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatusTime" })
  deploymentStatusTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentTime" })
  deploymentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=podName" })
  podName?: string;

  @SpeakeasyMetadata({ data: "json, name=podStatus" })
  podStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=podStatusTime" })
  podStatusTime?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCodeDetails" })
  statusCodeDetails?: string;
}
