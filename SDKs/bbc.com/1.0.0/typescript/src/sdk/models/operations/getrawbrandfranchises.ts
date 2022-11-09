import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawBrandFranchisesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawBrandFranchisesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawBrandFranchisesPathParams;
}


export class GetRawBrandFranchisesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
