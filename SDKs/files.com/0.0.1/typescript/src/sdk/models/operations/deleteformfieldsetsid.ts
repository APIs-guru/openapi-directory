import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFormFieldSetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFormFieldSetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFormFieldSetsIdPathParams;
}


export class DeleteFormFieldSetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
