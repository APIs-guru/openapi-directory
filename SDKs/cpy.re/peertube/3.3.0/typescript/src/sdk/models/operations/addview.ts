import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddViewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class AddViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddViewPathParams;
}


export class AddViewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
