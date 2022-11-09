import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IssuesDeleteLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesDeleteLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesDeleteLabelPathParams;
}


export class IssuesDeleteLabelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
