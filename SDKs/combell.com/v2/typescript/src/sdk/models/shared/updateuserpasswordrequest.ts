import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUserPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;
}
