import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";
/**
 * This complex type specifies the dimensions and weight of a package.
**/
export declare class PackageSpecification extends SpeakeasyBase {
    dimensions?: Dimensions;
    weight?: Weight;
}
