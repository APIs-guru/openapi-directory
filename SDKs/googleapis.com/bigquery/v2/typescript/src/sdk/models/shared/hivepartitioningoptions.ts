import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HivePartitioningOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=requirePartitionFilter" })
  requirePartitionFilter?: boolean;

  @Metadata({ data: "json, name=sourceUriPrefix" })
  sourceUriPrefix?: string;
}
