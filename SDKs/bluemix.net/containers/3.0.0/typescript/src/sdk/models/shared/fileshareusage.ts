import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileshareUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_space" })
  availableSpace?: string;

  @Metadata({ data: "json, name=total_space" })
  totalSpace?: string;

  @Metadata({ data: "json, name=used_space" })
  usedSpace?: string;

  @Metadata({ data: "json, name=used_space_percentage" })
  usedSpacePercentage?: string;
}
