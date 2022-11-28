import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileshareUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_space" })
  availableSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=total_space" })
  totalSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=used_space" })
  usedSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=used_space_percentage" })
  usedSpacePercentage?: string;
}
