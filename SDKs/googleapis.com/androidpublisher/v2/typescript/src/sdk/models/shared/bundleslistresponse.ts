import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";



export class BundlesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Bundle })
  bundles?: Bundle[];

  @SpeakeasyMetadata()
  kind?: string;
}
