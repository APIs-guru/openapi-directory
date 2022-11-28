import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultField } from "./resultfield";
import { QueryStatistics } from "./querystatistics";
import { QueryStatusEnum } from "./querystatusenum";



export class GetQueryResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: ResultField, elemDepth: 2 })
  results?: ResultField[][];

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: QueryStatistics;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: QueryStatusEnum;
}
