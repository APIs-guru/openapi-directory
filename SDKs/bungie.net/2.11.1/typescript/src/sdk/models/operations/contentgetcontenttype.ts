import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentGetContentTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class ContentGetContentTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentGetContentTypePathParams;
}


export class ContentGetContentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
