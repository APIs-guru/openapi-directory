import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawBrandFranchisesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawBrandFranchisesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawBrandFranchisesPathParams;
}


export class GetRawBrandFranchisesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
