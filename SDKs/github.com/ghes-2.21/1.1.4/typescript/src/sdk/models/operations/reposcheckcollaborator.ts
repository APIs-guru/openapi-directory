import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposCheckCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ReposCheckCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCheckCollaboratorPathParams;
}


export class ReposCheckCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
