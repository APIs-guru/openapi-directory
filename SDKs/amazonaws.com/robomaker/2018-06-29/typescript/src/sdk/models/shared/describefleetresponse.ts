import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { Robot } from "./robot";


export class DescribeFleetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=lastDeploymentJob" })
  lastDeploymentJob?: string;

  @Metadata({ data: "json, name=lastDeploymentStatus" })
  lastDeploymentStatus?: DeploymentStatusEnum;

  @Metadata({ data: "json, name=lastDeploymentTime" })
  lastDeploymentTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=robots", elemType: shared.Robot })
  robots?: Robot[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
