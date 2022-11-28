import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationFilterVariableEnum } from "./evaluationfiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";



export class DescribeEvaluationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EQ" })
  eq?: string;

  @SpeakeasyMetadata({ data: "json, name=FilterVariable" })
  filterVariable?: EvaluationFilterVariableEnum;

  @SpeakeasyMetadata({ data: "json, name=GE" })
  ge?: string;

  @SpeakeasyMetadata({ data: "json, name=GT" })
  gt?: string;

  @SpeakeasyMetadata({ data: "json, name=LE" })
  le?: string;

  @SpeakeasyMetadata({ data: "json, name=LT" })
  lt?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NE" })
  ne?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
