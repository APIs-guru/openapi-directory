import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposCheckCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ReposCheckCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCheckCollaboratorPathParams;
}


export class ReposCheckCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
