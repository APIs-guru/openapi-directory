import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutBinIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutBinIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutBinIdPathParams;
}


export class PutBinIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStatus?: any;
}
