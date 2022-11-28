import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolutionVersion } from "./solutionversion";



export class DescribeSolutionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionVersion" })
  solutionVersion?: SolutionVersion;
}
