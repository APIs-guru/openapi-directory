import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFormFieldSetsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFormFieldSetsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFormFieldSetsIdPathParams;
}


export class GetFormFieldSetsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  formFieldSetEntity?: shared.FormFieldSetEntity;

  @Metadata()
  statusCode: number;
}
