import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
