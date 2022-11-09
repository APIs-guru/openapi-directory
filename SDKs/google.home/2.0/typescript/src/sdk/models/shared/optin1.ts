import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptIn1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=opencast" })
  opencast: boolean;

  @Metadata({ data: "json, name=preview_channel" })
  previewChannel: boolean;

  @Metadata({ data: "json, name=remote_ducking" })
  remoteDucking: boolean;

  @Metadata({ data: "json, name=stats" })
  stats: boolean;
}
