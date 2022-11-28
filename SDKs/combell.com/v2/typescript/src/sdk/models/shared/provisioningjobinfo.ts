import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompletionEstimation } from "./completionestimation";
import { ProvisioningJobStatusEnum } from "./provisioningjobstatusenum";



export class ProvisioningJobInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion" })
  completion?: CompletionEstimation;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProvisioningJobStatusEnum;
}
