import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PairwithSpeakerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connect" })
  connect: boolean;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile: number;
}
