import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
**/
export declare class RuntimeVersion extends SpeakeasyBase {
    deprecationDate?: Date;
    description?: string;
    releaseDate?: Date;
    versionName?: string;
}
