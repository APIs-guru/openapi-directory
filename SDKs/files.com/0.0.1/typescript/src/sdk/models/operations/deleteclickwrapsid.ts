import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteClickwrapsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteClickwrapsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteClickwrapsIdPathParams;
}


export class DeleteClickwrapsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
