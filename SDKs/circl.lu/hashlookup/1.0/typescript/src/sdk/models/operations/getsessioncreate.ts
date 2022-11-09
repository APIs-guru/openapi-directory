import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSessioncreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSessioncreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSessioncreatePathParams;
}


export class GetSessioncreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
