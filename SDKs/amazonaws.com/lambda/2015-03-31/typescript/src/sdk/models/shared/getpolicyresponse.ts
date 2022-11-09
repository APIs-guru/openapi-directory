import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;
}
