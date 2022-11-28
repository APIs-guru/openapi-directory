import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Statement" })
  statement?: string;
}
