import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageLimit } from "./usagelimit";



export class UsageLimitList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: UsageLimit })
  usageLimits?: UsageLimit[];
}
