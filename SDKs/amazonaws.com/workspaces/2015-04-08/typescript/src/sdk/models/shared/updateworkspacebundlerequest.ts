import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWorkspaceBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;
}
