import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatapointsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetDatapointsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatapointsIdPathParams;
}


export class GetDatapointsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoDatapointsDatapoint?: shared.ApiCoreDtoDatapointsDatapoint;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
