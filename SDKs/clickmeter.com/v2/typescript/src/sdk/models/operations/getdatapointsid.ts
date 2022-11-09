import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatapointsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetDatapointsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatapointsIdPathParams;
}


export class GetDatapointsIdResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoDatapointsDatapoint?: shared.ApiCoreDtoDatapointsDatapoint;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
