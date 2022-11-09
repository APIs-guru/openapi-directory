import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLastBlockNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class GetLastBlockNumberRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLastBlockNumberHeaders;
}


export class GetLastBlockNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLastBlockNumber?: shared.GetLastBlockNumber;
}
