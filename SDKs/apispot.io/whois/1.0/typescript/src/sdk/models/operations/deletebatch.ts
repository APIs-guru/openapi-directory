import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBatchPathParams;
}


export class DeleteBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
