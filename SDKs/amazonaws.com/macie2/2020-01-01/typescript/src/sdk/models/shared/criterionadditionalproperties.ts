import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CriterionAdditionalProperties
/** 
 * Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.
**/
export class CriterionAdditionalProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eq" })
  eq?: string[];

  @SpeakeasyMetadata({ data: "json, name=eqExactMatch" })
  eqExactMatch?: string[];

  @SpeakeasyMetadata({ data: "json, name=gt" })
  gt?: number;

  @SpeakeasyMetadata({ data: "json, name=gte" })
  gte?: number;

  @SpeakeasyMetadata({ data: "json, name=lt" })
  lt?: number;

  @SpeakeasyMetadata({ data: "json, name=lte" })
  lte?: number;

  @SpeakeasyMetadata({ data: "json, name=neq" })
  neq?: string[];
}
