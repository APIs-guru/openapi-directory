import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBinIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBinIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBinIdPathParams;
}


export class GetBinIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  getBinId200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
