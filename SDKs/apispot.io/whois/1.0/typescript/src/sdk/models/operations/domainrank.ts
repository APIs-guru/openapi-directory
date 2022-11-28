import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DomainRankPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}


export class DomainRank200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}


export class DomainRankRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainRankPathParams;
}


export class DomainRankResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  domainRank200ApplicationJsonObject?: DomainRank200ApplicationJson;
}
