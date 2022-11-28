import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLookupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=md5" })
  md5: string;
}


export class GetLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLookupPathParams;
}


export class GetLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
