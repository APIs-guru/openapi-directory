import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortfolioDetail
/** 
 * Information about a portfolio.
**/
export class PortfolioDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;
}
