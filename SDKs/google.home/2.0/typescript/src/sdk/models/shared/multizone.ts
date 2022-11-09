import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Multizone extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio_output_delay" })
  audioOutputDelay: number;

  @Metadata({ data: "json, name=audio_output_delay_hdmi" })
  audioOutputDelayHdmi: number;

  @Metadata({ data: "json, name=audio_output_delay_oem" })
  audioOutputDelayOem: number;

  @Metadata({ data: "json, name=aux_in_group" })
  auxInGroup: string;

  @Metadata({ data: "json, name=dynamic_groups" })
  dynamicGroups: string[];

  @Metadata({ data: "json, name=groups" })
  groups: string[];

  @Metadata({ data: "json, name=multichannel_status" })
  multichannelStatus: number;
}
