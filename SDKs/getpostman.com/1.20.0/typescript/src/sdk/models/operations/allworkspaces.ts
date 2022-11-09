import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllWorkspaces200ApplicationJsonWorkspaces extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AllWorkspaces200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspaces", elemType: operations.AllWorkspaces200ApplicationJsonWorkspaces })
  workspaces?: AllWorkspaces200ApplicationJsonWorkspaces[];
}


export class AllWorkspacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  allWorkspaces200ApplicationJsonObject?: AllWorkspaces200ApplicationJson;
}
