import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRequestsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteRequestsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRequestsIdPathParams;
}


export class DeleteRequestsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
