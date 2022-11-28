import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";



export class GetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetPropertyValueHistory", elemType: AssetPropertyValue })
  assetPropertyValueHistory: AssetPropertyValue[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
