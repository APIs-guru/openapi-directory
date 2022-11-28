import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewsSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=title" })
  title: string;
}


export class NewsSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewsSearchReadPathParams;
}


export class NewsSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
