import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBlockHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetBlockRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBlockHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetBlockRequest;
}


export class GetBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlock?: shared.GetBlock;
}
