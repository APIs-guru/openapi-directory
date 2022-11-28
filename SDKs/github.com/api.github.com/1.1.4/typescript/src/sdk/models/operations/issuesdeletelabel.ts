import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IssuesDeleteLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesDeleteLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesDeleteLabelPathParams;
}


export class IssuesDeleteLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
