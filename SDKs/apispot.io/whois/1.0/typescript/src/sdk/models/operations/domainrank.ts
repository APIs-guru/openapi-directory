import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DomainRankPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}


export class DomainRankRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DomainRankPathParams;
}


export class DomainRank200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=rank" })
  rank?: number;
}


export class DomainRankResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  domainRank200ApplicationJsonObject?: DomainRank200ApplicationJson;
}
