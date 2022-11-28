import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSessioncreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSessioncreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSessioncreatePathParams;
}


export class GetSessioncreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
