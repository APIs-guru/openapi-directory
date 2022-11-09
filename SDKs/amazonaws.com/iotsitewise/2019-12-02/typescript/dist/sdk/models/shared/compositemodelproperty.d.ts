import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Property } from "./property";
/**
 * Contains information about a composite model property on an asset.
**/
export declare class CompositeModelProperty extends SpeakeasyBase {
    assetProperty: Property;
    name: string;
    type: string;
}
