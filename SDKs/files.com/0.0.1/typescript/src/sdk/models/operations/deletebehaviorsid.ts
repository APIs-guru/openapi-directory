import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBehaviorsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteBehaviorsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBehaviorsIdPathParams;
}


export class DeleteBehaviorsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
