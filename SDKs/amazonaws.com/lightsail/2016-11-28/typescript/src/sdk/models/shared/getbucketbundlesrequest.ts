import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBucketBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeInactive" })
  includeInactive?: boolean;
}
