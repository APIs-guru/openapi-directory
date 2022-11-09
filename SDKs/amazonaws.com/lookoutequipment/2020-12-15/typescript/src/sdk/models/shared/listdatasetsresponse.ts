import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetSummary } from "./datasetsummary";


export class ListDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetSummaries", elemType: shared.DatasetSummary })
  datasetSummaries?: DatasetSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
