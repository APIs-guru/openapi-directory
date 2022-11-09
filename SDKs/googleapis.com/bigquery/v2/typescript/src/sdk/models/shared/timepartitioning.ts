import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimePartitioning extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationMs" })
  expirationMs?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=requirePartitionFilter" })
  requirePartitionFilter?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
