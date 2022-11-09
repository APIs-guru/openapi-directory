import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposRemoveCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ReposRemoveCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRemoveCollaboratorPathParams;
}


export class ReposRemoveCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
