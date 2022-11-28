import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";



// PackageSpecification
/** 
 * This complex type specifies the dimensions and weight of a package.
**/
export class PackageSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: Weight;
}
