import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClickwrapsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetClickwrapsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetClickwrapsQueryParams;
}


export class GetClickwrapsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClickwrapEntity })
  clickwrapEntities?: shared.ClickwrapEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
