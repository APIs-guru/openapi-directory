import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BuildInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_type" })
  buildType: number;

  @Metadata({ data: "json, name=cast_build_revision" })
  castBuildRevision: string;

  @Metadata({ data: "json, name=cast_control_version" })
  castControlVersion: number;

  @Metadata({ data: "json, name=preview_channel_state" })
  previewChannelState: number;

  @Metadata({ data: "json, name=release_track" })
  releaseTrack: string;

  @Metadata({ data: "json, name=system_build_number" })
  systemBuildNumber: string;
}
