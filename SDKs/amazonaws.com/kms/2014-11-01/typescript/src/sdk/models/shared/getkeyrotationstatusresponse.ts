import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeyRotationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyRotationEnabled" })
  keyRotationEnabled?: boolean;
}
