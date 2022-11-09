import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DotGetGlobalAlertsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includestreaming" })
  includestreaming?: boolean;
}


export class DotGetGlobalAlertsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DotGetGlobalAlertsQueryParams;
}


export class DotGetGlobalAlertsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
