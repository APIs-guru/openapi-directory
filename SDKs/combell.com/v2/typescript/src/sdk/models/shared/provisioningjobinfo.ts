import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompletionEstimation } from "./completionestimation";
import { ProvisioningJobStatusEnum } from "./provisioningjobstatusenum";


export class ProvisioningJobInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=completion" })
  completion?: CompletionEstimation;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: ProvisioningJobStatusEnum;
}
