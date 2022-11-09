import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFormFieldSetsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFormFieldSetsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFormFieldSetsIdPathParams;
}


export class DeleteFormFieldSetsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
