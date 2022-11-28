import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RankCarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class RankCarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RankCarQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CarRankRequest;
}


export class RankCarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carRankResponse?: shared.CarRankResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
