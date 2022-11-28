import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



// EngineDefaults
/** 
 *  Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. 
**/
export class EngineDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}
