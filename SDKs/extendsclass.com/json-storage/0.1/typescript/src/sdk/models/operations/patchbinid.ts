import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchBinIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchBinIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchBinIdPathParams;
}


export class PatchBinIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateStatus?: any;
}
