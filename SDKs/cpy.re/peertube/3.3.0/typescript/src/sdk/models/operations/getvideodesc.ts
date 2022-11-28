import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideoDescPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetVideoDescRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoDescPathParams;
}


export class GetVideoDescResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVideoDesc200ApplicationJsonString?: string;
}
