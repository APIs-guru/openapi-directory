import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MigrateWorkspaceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceWorkspaceId" })
  sourceWorkspaceId?: string;

  @Metadata({ data: "json, name=TargetWorkspaceId" })
  targetWorkspaceId?: string;
}
