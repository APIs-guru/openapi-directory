import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryAccessModeEnum } from "./repositoryaccessmodeenum";
import { RepositoryAuthConfig } from "./repositoryauthconfig";
/**
 * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
**/
export declare class ImageConfig extends SpeakeasyBase {
    repositoryAccessMode: RepositoryAccessModeEnum;
    repositoryAuthConfig?: RepositoryAuthConfig;
}
