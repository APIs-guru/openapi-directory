import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=title" })
  title: string;
}


export class NewsSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewsSearchReadPathParams;
}


export class NewsSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
