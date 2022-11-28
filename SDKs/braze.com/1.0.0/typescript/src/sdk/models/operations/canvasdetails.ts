import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CanvasDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canvas_id" })
  canvasId?: string;
}


export class CanvasDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CanvasDetailsQueryParams;
}


export class CanvasDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
