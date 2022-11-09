import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationSoftwareSuiteTypeEnum } from "./simulationsoftwaresuitetypeenum";


// SimulationSoftwareSuite
/** 
 * Information about a simulation software suite.
**/
export class SimulationSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SimulationSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
