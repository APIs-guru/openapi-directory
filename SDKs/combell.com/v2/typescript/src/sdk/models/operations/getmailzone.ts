import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMailZonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetMailZoneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetMailZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMailZonePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMailZoneQueryParams;
}


export class GetMailZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  mailZone?: shared.MailZone;

  @SpeakeasyMetadata()
  statusCode: number;
}
