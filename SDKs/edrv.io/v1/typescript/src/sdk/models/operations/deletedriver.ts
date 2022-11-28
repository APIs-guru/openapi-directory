import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDriverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteDriverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDriverPathParams;
}


export class DeleteDriverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
