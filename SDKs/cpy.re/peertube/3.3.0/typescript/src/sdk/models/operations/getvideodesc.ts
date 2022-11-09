import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideoDescPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetVideoDescRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoDescPathParams;
}


export class GetVideoDescResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getVideoDesc200ApplicationJsonString?: string;
}
