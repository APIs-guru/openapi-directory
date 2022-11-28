import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Multizone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_output_delay" })
  audioOutputDelay: number;

  @SpeakeasyMetadata({ data: "json, name=audio_output_delay_hdmi" })
  audioOutputDelayHdmi: number;

  @SpeakeasyMetadata({ data: "json, name=audio_output_delay_oem" })
  audioOutputDelayOem: number;

  @SpeakeasyMetadata({ data: "json, name=aux_in_group" })
  auxInGroup: string;

  @SpeakeasyMetadata({ data: "json, name=dynamic_groups" })
  dynamicGroups: string[];

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: string[];

  @SpeakeasyMetadata({ data: "json, name=multichannel_status" })
  multichannelStatus: number;
}
