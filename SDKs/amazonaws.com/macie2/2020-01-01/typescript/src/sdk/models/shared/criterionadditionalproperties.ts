import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CriterionAdditionalProperties
/** 
 * Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.
**/
export class CriterionAdditionalProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=eq" })
  eq?: string[];

  @Metadata({ data: "json, name=eqExactMatch" })
  eqExactMatch?: string[];

  @Metadata({ data: "json, name=gt" })
  gt?: number;

  @Metadata({ data: "json, name=gte" })
  gte?: number;

  @Metadata({ data: "json, name=lt" })
  lt?: number;

  @Metadata({ data: "json, name=lte" })
  lte?: number;

  @Metadata({ data: "json, name=neq" })
  neq?: string[];
}
