import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAs2KeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAs2KeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAs2KeysIdPathParams;
}


export class DeleteAs2KeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
