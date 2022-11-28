import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLocksPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteLocksPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class DeleteLocksPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLocksPathPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteLocksPathQueryParams;
}


export class DeleteLocksPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
