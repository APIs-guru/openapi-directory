import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddLayerVersionPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=Statement" })
  statement?: string;
}
