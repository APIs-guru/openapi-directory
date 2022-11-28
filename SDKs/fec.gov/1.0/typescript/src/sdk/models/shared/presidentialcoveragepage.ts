import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { PresidentialCoverage } from "./presidentialcoverage";



export class PresidentialCoveragePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: PresidentialCoverage })
  results?: PresidentialCoverage[];
}
