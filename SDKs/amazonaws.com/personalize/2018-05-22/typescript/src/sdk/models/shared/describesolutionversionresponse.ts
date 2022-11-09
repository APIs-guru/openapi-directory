import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolutionVersion } from "./solutionversion";


export class DescribeSolutionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionVersion" })
  solutionVersion?: SolutionVersion;
}
