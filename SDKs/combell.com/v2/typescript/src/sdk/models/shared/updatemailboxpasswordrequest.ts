import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMailboxPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
