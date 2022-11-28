import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MigrateWorkspaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceWorkspaceId" })
  sourceWorkspaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetWorkspaceId" })
  targetWorkspaceId?: string;
}
