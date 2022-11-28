import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";



// PortfolioShareDetail
/** 
 * Information about the portfolio share.
**/
export class PortfolioShareDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accepted" })
  accepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareTagOptions" })
  shareTagOptions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DescribePortfolioShareTypeEnum;
}
