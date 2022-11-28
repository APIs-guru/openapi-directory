import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCommandsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommandIds" })
  commandIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
