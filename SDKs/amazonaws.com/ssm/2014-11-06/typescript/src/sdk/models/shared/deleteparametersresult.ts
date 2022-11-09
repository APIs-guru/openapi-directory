import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteParametersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletedParameters" })
  deletedParameters?: string[];

  @Metadata({ data: "json, name=InvalidParameters" })
  invalidParameters?: string[];
}
