import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAs2KeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAs2KeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAs2KeysIdPathParams;
}


export class GetAs2KeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
