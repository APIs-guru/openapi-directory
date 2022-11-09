import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFailedIpNsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class ListFailedIpNsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListFailedIpNsHeaders;
}


export class ListFailedIpNsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listFailedIpNs?: shared.ListFailedIpNs;
}
