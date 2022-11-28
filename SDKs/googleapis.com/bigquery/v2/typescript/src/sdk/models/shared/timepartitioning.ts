import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimePartitioning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationMs" })
  expirationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=requirePartitionFilter" })
  requirePartitionFilter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
