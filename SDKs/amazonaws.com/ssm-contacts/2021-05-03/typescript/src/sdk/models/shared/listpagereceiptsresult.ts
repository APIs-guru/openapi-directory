import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Receipt } from "./receipt";



export class ListPageReceiptsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Receipts", elemType: Receipt })
  receipts?: Receipt[];
}
