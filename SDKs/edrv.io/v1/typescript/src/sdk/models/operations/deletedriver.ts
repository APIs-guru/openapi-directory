import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDriverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteDriverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDriverPathParams;
}


export class DeleteDriverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
