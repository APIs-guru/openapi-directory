import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfigForResponse } from "./oidcconfigforresponse";
import { SourceIpConfig } from "./sourceipconfig";



// Workforce
/** 
 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
**/
export class Workforce extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoConfig" })
  cognitoConfig?: CognitoConfig;

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OidcConfig" })
  oidcConfig?: OidcConfigForResponse;

  @SpeakeasyMetadata({ data: "json, name=SourceIpConfig" })
  sourceIpConfig?: SourceIpConfig;

  @SpeakeasyMetadata({ data: "json, name=SubDomain" })
  subDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkforceArn" })
  workforceArn: string;

  @SpeakeasyMetadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
