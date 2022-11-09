import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBinIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteBinIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBinIdPathParams;
}


export class DeleteBinIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteStatus?: any;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
