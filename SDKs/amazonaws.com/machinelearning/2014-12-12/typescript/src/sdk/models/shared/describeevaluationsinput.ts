import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationFilterVariableEnum } from "./evaluationfiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";


export class DescribeEvaluationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EQ" })
  eq?: string;

  @Metadata({ data: "json, name=FilterVariable" })
  filterVariable?: EvaluationFilterVariableEnum;

  @Metadata({ data: "json, name=GE" })
  ge?: string;

  @Metadata({ data: "json, name=GT" })
  gt?: string;

  @Metadata({ data: "json, name=LE" })
  le?: string;

  @Metadata({ data: "json, name=LT" })
  lt?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NE" })
  ne?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
