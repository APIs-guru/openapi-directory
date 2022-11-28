import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutBinIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutBinIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBinIdPathParams;
}


export class PutBinIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateStatus?: any;
}
