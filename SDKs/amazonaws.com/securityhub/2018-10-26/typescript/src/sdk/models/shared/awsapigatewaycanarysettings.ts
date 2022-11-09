import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsApiGatewayCanarySettings
/** 
 * Contains information about settings for canary deployment in the stage.
**/
export class AwsApiGatewayCanarySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=PercentTraffic" })
  percentTraffic?: number;

  @Metadata({ data: "json, name=StageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=UseStageCache" })
  useStageCache?: boolean;
}
