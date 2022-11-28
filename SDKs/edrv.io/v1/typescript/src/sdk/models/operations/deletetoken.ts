import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTokenPathParams;
}


export class DeleteTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
