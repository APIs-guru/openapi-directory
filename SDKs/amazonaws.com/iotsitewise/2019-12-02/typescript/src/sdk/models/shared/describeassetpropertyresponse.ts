import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Property } from "./property";
import { CompositeModelProperty } from "./compositemodelproperty";



export class DescribeAssetPropertyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=assetName" })
  assetName: string;

  @SpeakeasyMetadata({ data: "json, name=assetProperty" })
  assetProperty?: Property;

  @SpeakeasyMetadata({ data: "json, name=compositeModel" })
  compositeModel?: CompositeModelProperty;
}
