import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


export class GetOperationsForResourceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageCount" })
  nextPageCount?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
