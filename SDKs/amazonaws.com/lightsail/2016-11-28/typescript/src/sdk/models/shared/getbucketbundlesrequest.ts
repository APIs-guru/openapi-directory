import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBucketBundlesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeInactive" })
  includeInactive?: boolean;
}
