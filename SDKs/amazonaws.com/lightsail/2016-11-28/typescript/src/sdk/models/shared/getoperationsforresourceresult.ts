import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



export class GetOperationsForResourceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageCount" })
  nextPageCount?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
