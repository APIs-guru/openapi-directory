import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReisezentrenIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetReisezentrenIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReisezentrenIdPathParams;
}


export class GetReisezentrenIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
