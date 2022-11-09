import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";


export class GetAssetPropertyValueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=propertyValue" })
  propertyValue?: AssetPropertyValue;
}
