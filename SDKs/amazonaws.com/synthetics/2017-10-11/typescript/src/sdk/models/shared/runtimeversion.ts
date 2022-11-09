import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeVersion
/** 
 * This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
**/
export class RuntimeVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeprecationDate" })
  deprecationDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ReleaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
