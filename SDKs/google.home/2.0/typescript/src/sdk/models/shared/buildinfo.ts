import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BuildInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_type" })
  buildType: number;

  @SpeakeasyMetadata({ data: "json, name=cast_build_revision" })
  castBuildRevision: string;

  @SpeakeasyMetadata({ data: "json, name=cast_control_version" })
  castControlVersion: number;

  @SpeakeasyMetadata({ data: "json, name=preview_channel_state" })
  previewChannelState: number;

  @SpeakeasyMetadata({ data: "json, name=release_track" })
  releaseTrack: string;

  @SpeakeasyMetadata({ data: "json, name=system_build_number" })
  systemBuildNumber: string;
}
