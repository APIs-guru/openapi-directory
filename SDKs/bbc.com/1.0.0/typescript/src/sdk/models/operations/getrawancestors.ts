import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawAncestorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawAncestorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawAncestorsPathParams;
}


export class GetRawAncestorsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
