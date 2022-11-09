import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetPostGameCarnageReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: number;
}


export class Destiny2GetPostGameCarnageReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetPostGameCarnageReportPathParams;
}


export class Destiny2GetPostGameCarnageReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
