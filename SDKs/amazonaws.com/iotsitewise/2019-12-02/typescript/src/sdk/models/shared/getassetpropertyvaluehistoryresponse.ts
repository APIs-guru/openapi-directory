import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetPropertyValue } from "./assetpropertyvalue";


export class GetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetPropertyValueHistory", elemType: shared.AssetPropertyValue })
  assetPropertyValueHistory: AssetPropertyValue[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
