import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUserStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
