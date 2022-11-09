import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLocksPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteLocksPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class DeleteLocksPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLocksPathPathParams;

  @Metadata()
  queryParams: DeleteLocksPathQueryParams;
}


export class DeleteLocksPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
