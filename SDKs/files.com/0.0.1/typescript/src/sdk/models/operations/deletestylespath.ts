import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStylesPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class DeleteStylesPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStylesPathPathParams;
}


export class DeleteStylesPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
