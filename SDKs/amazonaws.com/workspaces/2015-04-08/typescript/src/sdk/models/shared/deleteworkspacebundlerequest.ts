import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkspaceBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId?: string;
}
