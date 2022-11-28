import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationSoftwareSuiteTypeEnum } from "./simulationsoftwaresuitetypeenum";



// SimulationSoftwareSuite
/** 
 * Information about a simulation software suite.
**/
export class SimulationSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SimulationSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
