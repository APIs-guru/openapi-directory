import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteClickwrapsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteClickwrapsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteClickwrapsIdPathParams;
}


export class DeleteClickwrapsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
