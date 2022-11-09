import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrendingGetTrendingEntryDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=trendingEntryType" })
  trendingEntryType: number;
}


export class TrendingGetTrendingEntryDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrendingGetTrendingEntryDetailPathParams;
}


export class TrendingGetTrendingEntryDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
