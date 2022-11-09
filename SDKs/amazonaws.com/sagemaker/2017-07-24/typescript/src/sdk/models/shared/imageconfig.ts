import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryAccessModeEnum } from "./repositoryaccessmodeenum";
import { RepositoryAuthConfig } from "./repositoryauthconfig";


// ImageConfig
/** 
 * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
**/
export class ImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=RepositoryAccessMode" })
  repositoryAccessMode: RepositoryAccessModeEnum;

  @Metadata({ data: "json, name=RepositoryAuthConfig" })
  repositoryAuthConfig?: RepositoryAuthConfig;
}
