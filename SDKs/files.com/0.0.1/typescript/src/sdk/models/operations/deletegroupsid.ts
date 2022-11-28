import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupsIdPathParams;
}


export class DeleteGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
