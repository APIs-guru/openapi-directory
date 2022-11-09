import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemInstanceDeploymentStatusEnum } from "./systeminstancedeploymentstatusenum";
import { DeploymentTargetEnum } from "./deploymenttargetenum";


// SystemInstanceSummary
/** 
 * An object that contains summary information about a system instance.
**/
export class SystemInstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=greengrassGroupId" })
  greengrassGroupId?: string;

  @Metadata({ data: "json, name=greengrassGroupName" })
  greengrassGroupName?: string;

  @Metadata({ data: "json, name=greengrassGroupVersionId" })
  greengrassGroupVersionId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: SystemInstanceDeploymentStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: DeploymentTargetEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
