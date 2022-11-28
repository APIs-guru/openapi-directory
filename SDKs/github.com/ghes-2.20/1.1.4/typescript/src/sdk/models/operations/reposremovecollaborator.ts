import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposRemoveCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ReposRemoveCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposRemoveCollaboratorPathParams;
}


export class ReposRemoveCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
