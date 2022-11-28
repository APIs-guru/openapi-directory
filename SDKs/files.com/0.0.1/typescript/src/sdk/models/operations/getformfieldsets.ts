import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFormFieldSetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetFormFieldSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFormFieldSetsQueryParams;
}


export class GetFormFieldSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FormFieldSetEntity })
  formFieldSetEntities?: shared.FormFieldSetEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
