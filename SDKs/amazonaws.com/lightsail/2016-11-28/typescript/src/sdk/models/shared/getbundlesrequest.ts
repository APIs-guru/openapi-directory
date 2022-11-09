import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBundlesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeInactive" })
  includeInactive?: boolean;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
