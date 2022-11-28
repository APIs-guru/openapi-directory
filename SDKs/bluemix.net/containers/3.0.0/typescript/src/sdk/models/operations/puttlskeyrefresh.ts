import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutTlskeyRefreshHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PutTlskeyRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutTlskeyRefreshHeaders;
}


export class PutTlskeyRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateRefresh?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
