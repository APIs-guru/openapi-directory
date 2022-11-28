import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;
}
