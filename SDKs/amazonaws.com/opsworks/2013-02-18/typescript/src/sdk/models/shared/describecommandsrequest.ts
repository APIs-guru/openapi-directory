import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCommandsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommandIds" })
  commandIds?: string[];

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
