import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePrimaryRegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryRegion" })
  primaryRegion: string;
}
