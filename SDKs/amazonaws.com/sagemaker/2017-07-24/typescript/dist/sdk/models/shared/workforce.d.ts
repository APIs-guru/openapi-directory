import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfigForResponse } from "./oidcconfigforresponse";
import { SourceIpConfig } from "./sourceipconfig";
/**
 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
**/
export declare class Workforce extends SpeakeasyBase {
    cognitoConfig?: CognitoConfig;
    createDate?: Date;
    lastUpdatedDate?: Date;
    oidcConfig?: OidcConfigForResponse;
    sourceIpConfig?: SourceIpConfig;
    subDomain?: string;
    workforceArn: string;
    workforceName: string;
}
