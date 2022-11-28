import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureMailboxAutoForwardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" })
  mailboxName: string;
}


export class ConfigureMailboxAutoForwardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" })
  mailboxName: string;
}


export class ConfigureMailboxAutoForwardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureMailboxAutoForwardPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureMailboxAutoForwardQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AutoForward;
}


export class ConfigureMailboxAutoForwardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
