import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFilesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteFilesPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;
}


export class DeleteFilesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFilesPathPathParams;

  @Metadata()
  queryParams: DeleteFilesPathQueryParams;
}


export class DeleteFilesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
