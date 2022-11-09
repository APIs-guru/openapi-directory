import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { PresidentialCoverage } from "./presidentialcoverage";


export class PresidentialCoveragePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.PresidentialCoverage })
  results?: PresidentialCoverage[];
}
