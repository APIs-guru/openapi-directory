import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Property } from "./property";
import { CompositeModelProperty } from "./compositemodelproperty";
export declare class DescribeAssetPropertyResponse extends SpeakeasyBase {
    assetId: string;
    assetModelId: string;
    assetName: string;
    assetProperty?: Property;
    compositeModel?: CompositeModelProperty;
}
