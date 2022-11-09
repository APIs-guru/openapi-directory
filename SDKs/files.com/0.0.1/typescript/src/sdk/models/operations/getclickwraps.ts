import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClickwrapsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetClickwrapsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetClickwrapsQueryParams;
}


export class GetClickwrapsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClickwrapEntity })
  clickwrapEntities?: shared.ClickwrapEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
