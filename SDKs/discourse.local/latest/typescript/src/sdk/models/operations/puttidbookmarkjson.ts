import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutTIdBookmarkJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdBookmarkJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutTIdBookmarkJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTIdBookmarkJsonPathParams;

  @SpeakeasyMetadata()
  headers: PutTIdBookmarkJsonHeaders;
}


export class PutTIdBookmarkJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
