import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePrimaryRegionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=PrimaryRegion" })
  primaryRegion: string;
}
