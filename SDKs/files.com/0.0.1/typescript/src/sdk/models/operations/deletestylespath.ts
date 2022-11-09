import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStylesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteStylesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStylesPathPathParams;
}


export class DeleteStylesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
