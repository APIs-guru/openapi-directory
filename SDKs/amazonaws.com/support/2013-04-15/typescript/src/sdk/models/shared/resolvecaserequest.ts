import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResolveCaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseId" })
  caseId?: string;
}
