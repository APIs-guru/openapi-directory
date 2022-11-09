import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PairwithSpeakerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connect" })
  connect: boolean;

  @Metadata({ data: "json, name=mac_address" })
  macAddress: string;

  @Metadata({ data: "json, name=profile" })
  profile: number;
}
