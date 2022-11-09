import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPutAssetPropertyErrorEntry } from "./batchputassetpropertyerrorentry";


export class BatchPutAssetPropertyValueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorEntries", elemType: shared.BatchPutAssetPropertyErrorEntry })
  errorEntries: BatchPutAssetPropertyErrorEntry[];
}
