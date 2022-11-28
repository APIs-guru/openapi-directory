import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConstraintDetail
/** 
 * Information about a constraint.
**/
export class ConstraintDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConstraintId" })
  constraintId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
