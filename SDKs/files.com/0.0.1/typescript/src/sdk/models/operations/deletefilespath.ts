import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFilesPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteFilesPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;
}


export class DeleteFilesPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFilesPathPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteFilesPathQueryParams;
}


export class DeleteFilesPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
