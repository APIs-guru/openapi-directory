import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyRotationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyRotationEnabled" })
  keyRotationEnabled?: boolean;
}
