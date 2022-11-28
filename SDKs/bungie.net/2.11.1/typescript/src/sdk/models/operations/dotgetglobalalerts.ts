import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DotGetGlobalAlertsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includestreaming" })
  includestreaming?: boolean;
}


export class DotGetGlobalAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DotGetGlobalAlertsQueryParams;
}


export class DotGetGlobalAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
