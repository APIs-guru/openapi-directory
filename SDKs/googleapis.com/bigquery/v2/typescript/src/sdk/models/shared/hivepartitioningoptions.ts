import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HivePartitioningOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=requirePartitionFilter" })
  requirePartitionFilter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceUriPrefix" })
  sourceUriPrefix?: string;
}
