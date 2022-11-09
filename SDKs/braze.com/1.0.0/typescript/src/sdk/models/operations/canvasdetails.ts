import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CanvasDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=canvas_id" })
  canvasId?: string;
}


export class CanvasDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CanvasDetailsQueryParams;
}


export class CanvasDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
