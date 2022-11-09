import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddViewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class AddViewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddViewPathParams;
}


export class AddViewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
