import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";



export class GetBundlesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: Bundle })
  bundles?: Bundle[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
