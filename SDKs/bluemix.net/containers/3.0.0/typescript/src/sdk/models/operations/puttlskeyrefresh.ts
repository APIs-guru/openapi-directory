import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutTlskeyRefreshHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PutTlskeyRefreshRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutTlskeyRefreshHeaders;
}


export class PutTlskeyRefreshResponse extends SpeakeasyBase {
  @Metadata()
  certificateRefresh?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
