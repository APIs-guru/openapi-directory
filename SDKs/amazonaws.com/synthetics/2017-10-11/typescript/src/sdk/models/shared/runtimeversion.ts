import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeVersion
/** 
 * This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
**/
export class RuntimeVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeprecationDate" })
  deprecationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
