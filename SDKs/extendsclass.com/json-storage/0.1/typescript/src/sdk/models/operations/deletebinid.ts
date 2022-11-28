import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBinIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteBinIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBinIdPathParams;
}


export class DeleteBinIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteStatus?: any;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
