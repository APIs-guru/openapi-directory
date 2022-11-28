import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export declare class ScalingConfigurationInfo extends SpeakeasyBase {
    autoPause?: boolean;
    maxCapacity?: number;
    minCapacity?: number;
    secondsBeforeTimeout?: number;
    secondsUntilAutoPause?: number;
    timeoutAction?: string;
}
