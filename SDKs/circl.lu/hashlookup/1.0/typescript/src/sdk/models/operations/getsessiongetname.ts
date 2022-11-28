import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSessionGetNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSessionGetNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSessionGetNamePathParams;
}


export class GetSessionGetNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
