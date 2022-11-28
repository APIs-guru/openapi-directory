import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsApiGatewayCanarySettings
/** 
 * Contains information about settings for canary deployment in the stage.
**/
export class AwsApiGatewayCanarySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=PercentTraffic" })
  percentTraffic?: number;

  @SpeakeasyMetadata({ data: "json, name=StageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UseStageCache" })
  useStageCache?: boolean;
}
