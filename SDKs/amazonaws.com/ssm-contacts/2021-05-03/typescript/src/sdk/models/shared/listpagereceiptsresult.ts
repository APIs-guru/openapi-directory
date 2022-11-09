import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Receipt } from "./receipt";


export class ListPageReceiptsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Receipts", elemType: shared.Receipt })
  receipts?: Receipt[];
}
