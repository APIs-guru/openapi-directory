import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetPostGameCarnageReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: number;
}


export class Destiny2GetPostGameCarnageReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetPostGameCarnageReportPathParams;
}


export class Destiny2GetPostGameCarnageReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
