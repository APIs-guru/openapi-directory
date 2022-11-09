import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBundlesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteBundlesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBundlesIdPathParams;
}


export class DeleteBundlesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
