import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetSummary } from "./datasetsummary";



export class ListDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasets", elemType: DatasetSummary })
  datasets?: DatasetSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
