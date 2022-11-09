import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupsIdPathParams;
}


export class DeleteGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
