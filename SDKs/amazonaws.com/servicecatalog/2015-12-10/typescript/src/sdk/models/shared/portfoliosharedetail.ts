import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";


// PortfolioShareDetail
/** 
 * Information about the portfolio share.
**/
export class PortfolioShareDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accepted" })
  accepted?: boolean;

  @Metadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @Metadata({ data: "json, name=ShareTagOptions" })
  shareTagOptions?: boolean;

  @Metadata({ data: "json, name=Type" })
  type?: DescribePortfolioShareTypeEnum;
}
