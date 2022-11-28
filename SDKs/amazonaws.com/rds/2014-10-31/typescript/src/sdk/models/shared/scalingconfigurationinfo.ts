import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScalingConfigurationInfo
/** 
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export class ScalingConfigurationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoPause?: boolean;

  @SpeakeasyMetadata()
  maxCapacity?: number;

  @SpeakeasyMetadata()
  minCapacity?: number;

  @SpeakeasyMetadata()
  secondsBeforeTimeout?: number;

  @SpeakeasyMetadata()
  secondsUntilAutoPause?: number;

  @SpeakeasyMetadata()
  timeoutAction?: string;
}
