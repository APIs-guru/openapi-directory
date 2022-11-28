import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}


export class CheckDomain200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isAvailable" })
  isAvailable?: boolean;
}


export class CheckDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckDomainPathParams;
}


export class CheckDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkDomain200ApplicationJsonObject?: CheckDomain200ApplicationJson;
}
