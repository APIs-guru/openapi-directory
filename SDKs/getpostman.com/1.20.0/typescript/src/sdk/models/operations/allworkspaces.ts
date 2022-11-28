import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllWorkspaces200ApplicationJsonWorkspaces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AllWorkspaces200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspaces", elemType: AllWorkspaces200ApplicationJsonWorkspaces })
  workspaces?: AllWorkspaces200ApplicationJsonWorkspaces[];
}


export class AllWorkspacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  allWorkspaces200ApplicationJsonObject?: AllWorkspaces200ApplicationJson;
}
