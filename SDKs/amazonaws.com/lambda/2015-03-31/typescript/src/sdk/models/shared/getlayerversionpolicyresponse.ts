import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLayerVersionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;
}
