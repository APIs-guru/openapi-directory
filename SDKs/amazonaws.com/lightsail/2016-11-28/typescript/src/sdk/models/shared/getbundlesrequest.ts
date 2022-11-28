import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeInactive" })
  includeInactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
