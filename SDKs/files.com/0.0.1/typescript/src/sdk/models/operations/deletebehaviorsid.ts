import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBehaviorsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteBehaviorsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBehaviorsIdPathParams;
}


export class DeleteBehaviorsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
