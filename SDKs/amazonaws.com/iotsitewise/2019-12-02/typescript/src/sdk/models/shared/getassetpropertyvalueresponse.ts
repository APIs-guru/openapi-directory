import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";



export class GetAssetPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyValue" })
  propertyValue?: AssetPropertyValue;
}
