import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersIdPathParams;
}


export class DeleteUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
