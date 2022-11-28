import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResubscribePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ResubscribeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId: string;
}


export class ResubscribeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ResubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResubscribePathParams;

  @SpeakeasyMetadata()
  queryParams: ResubscribeQueryParams;

  @SpeakeasyMetadata()
  security: ResubscribeSecurity;
}


export class ResubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resubscribe200ApplicationJsonObject?: Map<string, any>;
}
