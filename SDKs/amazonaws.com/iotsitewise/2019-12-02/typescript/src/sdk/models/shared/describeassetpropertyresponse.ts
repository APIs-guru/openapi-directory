import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Property } from "./property";
import { CompositeModelProperty } from "./compositemodelproperty";


export class DescribeAssetPropertyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetId" })
  assetId: string;

  @Metadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @Metadata({ data: "json, name=assetName" })
  assetName: string;

  @Metadata({ data: "json, name=assetProperty" })
  assetProperty?: Property;

  @Metadata({ data: "json, name=compositeModel" })
  compositeModel?: CompositeModelProperty;
}
