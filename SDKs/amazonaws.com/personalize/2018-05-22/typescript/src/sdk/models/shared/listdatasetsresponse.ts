import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetSummary } from "./datasetsummary";


export class ListDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets", elemType: shared.DatasetSummary })
  datasets?: DatasetSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
