import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPutAssetPropertyErrorEntry } from "./batchputassetpropertyerrorentry";



export class BatchPutAssetPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorEntries", elemType: BatchPutAssetPropertyErrorEntry })
  errorEntries: BatchPutAssetPropertyErrorEntry[];
}
