import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBatchPathParams;
}


export class DeleteBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
