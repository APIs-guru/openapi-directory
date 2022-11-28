import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceDeploymentStatusEnum } from "./systeminstancedeploymentstatusenum";
import { DeploymentTargetEnum } from "./deploymenttargetenum";



// SystemInstanceSummary
/** 
 * An object that contains summary information about a system instance.
**/
export class SystemInstanceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=greengrassGroupId" })
  greengrassGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=greengrassGroupName" })
  greengrassGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=greengrassGroupVersionId" })
  greengrassGroupVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SystemInstanceDeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: DeploymentTargetEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
