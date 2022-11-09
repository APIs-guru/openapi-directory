import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RankCarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class RankCarRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RankCarQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CarRankRequest;
}


export class RankCarResponse extends SpeakeasyBase {
  @Metadata()
  carRankResponse?: shared.CarRankResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
