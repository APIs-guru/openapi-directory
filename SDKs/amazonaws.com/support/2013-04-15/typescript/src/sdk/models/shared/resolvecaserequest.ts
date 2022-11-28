import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResolveCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId?: string;
}
