import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultField } from "./resultfield";
import { QueryStatistics } from "./querystatistics";
import { QueryStatusEnum } from "./querystatusenum";


export class GetQueryResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.ResultField, elemDepth: 2 })
  results?: ResultField[][];

  @Metadata({ data: "json, name=statistics" })
  statistics?: QueryStatistics;

  @Metadata({ data: "json, name=status" })
  status?: QueryStatusEnum;
}
