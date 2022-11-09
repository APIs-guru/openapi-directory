import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLocationPathParams;
}


export class DeleteLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
