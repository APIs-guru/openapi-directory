import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteApiKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiKeysIdPathParams;
}


export class DeleteApiKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
