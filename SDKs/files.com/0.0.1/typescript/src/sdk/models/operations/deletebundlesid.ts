import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBundlesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteBundlesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBundlesIdPathParams;
}


export class DeleteBundlesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
