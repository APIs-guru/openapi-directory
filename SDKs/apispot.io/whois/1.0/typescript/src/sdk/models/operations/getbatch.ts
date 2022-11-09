import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBatchPathParams;
}


export class GetBatchResponse extends SpeakeasyBase {
  @Metadata()
  batch?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
