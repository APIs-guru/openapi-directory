import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";



// PutAssetPropertyValueEntry
/** 
 * Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.
**/
export class PutAssetPropertyValueEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=entryId" })
  entryId: string;

  @SpeakeasyMetadata({ data: "json, name=propertyAlias" })
  propertyAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValues", elemType: AssetPropertyValue })
  propertyValues: AssetPropertyValue[];
}
