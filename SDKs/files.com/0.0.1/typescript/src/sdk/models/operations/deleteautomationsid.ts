import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAutomationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAutomationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAutomationsIdPathParams;
}


export class DeleteAutomationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
