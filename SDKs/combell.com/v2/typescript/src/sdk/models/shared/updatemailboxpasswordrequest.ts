import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMailboxPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;
}
