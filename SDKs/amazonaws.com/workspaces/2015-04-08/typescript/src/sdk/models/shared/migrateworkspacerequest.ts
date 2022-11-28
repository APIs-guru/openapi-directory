import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MigrateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=SourceWorkspaceId" })
  sourceWorkspaceId: string;
}
