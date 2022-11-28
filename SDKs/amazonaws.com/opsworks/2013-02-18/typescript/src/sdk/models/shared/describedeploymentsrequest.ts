import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDeploymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentIds" })
  deploymentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
