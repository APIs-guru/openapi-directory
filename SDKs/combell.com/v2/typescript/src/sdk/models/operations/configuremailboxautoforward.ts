import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureMailboxAutoForwardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class ConfigureMailboxAutoForwardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class ConfigureMailboxAutoForwardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureMailboxAutoForwardPathParams;

  @Metadata()
  queryParams: ConfigureMailboxAutoForwardQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AutoForward;
}


export class ConfigureMailboxAutoForwardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
