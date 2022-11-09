import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}


export class CheckDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckDomainPathParams;
}


export class CheckDomain200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=isAvailable" })
  isAvailable?: boolean;
}


export class CheckDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkDomain200ApplicationJsonObject?: CheckDomain200ApplicationJson;
}
