import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWorkspaceBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;
}
