import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bundle } from "./bundle";


export class GetBundlesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundles", elemType: shared.Bundle })
  bundles?: Bundle[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
