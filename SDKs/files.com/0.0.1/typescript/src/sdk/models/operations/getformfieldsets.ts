import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFormFieldSetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetFormFieldSetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFormFieldSetsQueryParams;
}


export class GetFormFieldSetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FormFieldSetEntity })
  formFieldSetEntities?: shared.FormFieldSetEntity[];

  @Metadata()
  statusCode: number;
}
