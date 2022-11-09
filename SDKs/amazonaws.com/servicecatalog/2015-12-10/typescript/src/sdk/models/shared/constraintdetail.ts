import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConstraintDetail
/** 
 * Information about a constraint.
**/
export class ConstraintDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConstraintId" })
  constraintId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
