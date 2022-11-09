import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Statement" })
  statement?: string;
}
