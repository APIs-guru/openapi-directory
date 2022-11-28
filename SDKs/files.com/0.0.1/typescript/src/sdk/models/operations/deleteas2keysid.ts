import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAs2KeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAs2KeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAs2KeysIdPathParams;
}


export class DeleteAs2KeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
