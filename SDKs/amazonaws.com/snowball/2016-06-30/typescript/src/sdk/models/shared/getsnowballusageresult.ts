import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSnowballUsageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnowballLimit" })
  snowballLimit?: number;

  @Metadata({ data: "json, name=SnowballsInUse" })
  snowballsInUse?: number;
}
