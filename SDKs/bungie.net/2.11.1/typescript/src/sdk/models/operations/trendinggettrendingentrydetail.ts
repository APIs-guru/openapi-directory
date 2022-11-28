import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrendingGetTrendingEntryDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=trendingEntryType" })
  trendingEntryType: number;
}


export class TrendingGetTrendingEntryDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrendingGetTrendingEntryDetailPathParams;
}


export class TrendingGetTrendingEntryDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
