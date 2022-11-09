import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMailZonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetMailZoneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetMailZoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMailZonePathParams;

  @Metadata()
  queryParams: GetMailZoneQueryParams;
}


export class GetMailZoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mailZone?: shared.MailZone;

  @Metadata()
  statusCode: number;
}
