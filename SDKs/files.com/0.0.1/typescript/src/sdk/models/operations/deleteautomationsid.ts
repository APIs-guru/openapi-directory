import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAutomationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAutomationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAutomationsIdPathParams;
}


export class DeleteAutomationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
