import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSnowballUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnowballLimit" })
  snowballLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SnowballsInUse" })
  snowballsInUse?: number;
}
