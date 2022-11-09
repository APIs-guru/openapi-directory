import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimensions } from "./dimensions";
import { Weight } from "./weight";


// PackageSpecification
/** 
 * This complex type specifies the dimensions and weight of a package.
**/
export class PackageSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @Metadata({ data: "json, name=weight" })
  weight?: Weight;
}
