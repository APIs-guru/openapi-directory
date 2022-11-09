import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSessionGetNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSessionGetNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSessionGetNamePathParams;
}


export class GetSessionGetNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
