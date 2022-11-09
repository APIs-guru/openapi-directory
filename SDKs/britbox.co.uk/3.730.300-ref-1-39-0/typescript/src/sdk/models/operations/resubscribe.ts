import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResubscribePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ResubscribeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=planId" })
  planId: string;
}


export class ResubscribeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ResubscribeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResubscribePathParams;

  @Metadata()
  queryParams: ResubscribeQueryParams;

  @Metadata()
  security: ResubscribeSecurity;
}


export class ResubscribeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resubscribe200ApplicationJsonObject?: Map<string, any>;
}
