import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletedParameters" })
  deletedParameters?: string[];

  @SpeakeasyMetadata({ data: "json, name=InvalidParameters" })
  invalidParameters?: string[];
}
