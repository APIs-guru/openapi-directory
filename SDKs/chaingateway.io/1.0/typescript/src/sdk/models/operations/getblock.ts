import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlockHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetBlockHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetBlockRequest;
}


export class GetBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBlock?: shared.GetBlock;
}
