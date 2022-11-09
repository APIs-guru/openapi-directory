import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourcePolicyStatementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
