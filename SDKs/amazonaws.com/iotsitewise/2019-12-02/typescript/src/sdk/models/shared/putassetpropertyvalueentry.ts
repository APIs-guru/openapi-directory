import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetPropertyValue } from "./assetpropertyvalue";


// PutAssetPropertyValueEntry
/** 
 * Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.
**/
export class PutAssetPropertyValueEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetId" })
  assetId?: string;

  @Metadata({ data: "json, name=entryId" })
  entryId: string;

  @Metadata({ data: "json, name=propertyAlias" })
  propertyAlias?: string;

  @Metadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @Metadata({ data: "json, name=propertyValues", elemType: shared.AssetPropertyValue })
  propertyValues: AssetPropertyValue[];
}
