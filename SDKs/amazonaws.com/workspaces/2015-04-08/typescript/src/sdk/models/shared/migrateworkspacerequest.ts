import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MigrateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId: string;

  @Metadata({ data: "json, name=SourceWorkspaceId" })
  sourceWorkspaceId: string;
}
