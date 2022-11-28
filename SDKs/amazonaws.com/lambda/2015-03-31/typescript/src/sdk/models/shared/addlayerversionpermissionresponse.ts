import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddLayerVersionPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Statement" })
  statement?: string;
}
