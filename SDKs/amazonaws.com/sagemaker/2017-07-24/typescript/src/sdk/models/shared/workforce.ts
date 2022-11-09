import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfigForResponse } from "./oidcconfigforresponse";
import { SourceIpConfig } from "./sourceipconfig";


// Workforce
/** 
 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
**/
export class Workforce extends SpeakeasyBase {
  @Metadata({ data: "json, name=CognitoConfig" })
  cognitoConfig?: CognitoConfig;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=OidcConfig" })
  oidcConfig?: OidcConfigForResponse;

  @Metadata({ data: "json, name=SourceIpConfig" })
  sourceIpConfig?: SourceIpConfig;

  @Metadata({ data: "json, name=SubDomain" })
  subDomain?: string;

  @Metadata({ data: "json, name=WorkforceArn" })
  workforceArn: string;

  @Metadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
